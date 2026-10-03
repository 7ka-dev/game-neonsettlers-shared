import * as utils from '../utils/utils';
export function getAvailableSettlementPoints(game, playerId) {
    const available = [];
    const playerRoads = game.roads.filter(r => r.playerId === playerId);
    const availableSettlements = getAvailableSetupSettlements(game, true);
    if (playerRoads.length <= 1)
        return [];
    while (playerRoads.length > 0) {
        const road = playerRoads.splice(playerRoads.length - 1, 1)[0];
        const neighbor = playerRoads.filter(r => isNeighborRoad(road, r));
        for (const n of neighbor) {
            // Найдем пересечение у дорог
            let intersection;
            let point1;
            let point2;
            if (utils.areEqual(n.from.x, road.from.x) && utils.areEqual(n.from.y, road.from.y)) {
                intersection = n.from;
                point1 = n.to;
                point2 = road.to;
            }
            else if (utils.areEqual(n.to.x, road.to.x) && utils.areEqual(n.to.y, road.to.y)) {
                intersection = n.to;
                point1 = n.from;
                point2 = road.from;
            }
            else if (utils.areEqual(n.from.x, road.to.x) && utils.areEqual(n.from.y, road.to.y)) {
                intersection = n.from;
                point1 = n.to;
                point2 = road.from;
            }
            else if (utils.areEqual(n.to.x, road.from.x) && utils.areEqual(n.to.y, road.from.y)) {
                intersection = n.to;
                point1 = n.from;
                point2 = road.to;
            }
            else {
                console.error('Cant find intersection of roads!');
            }
            // Посмотрим есть ли на пересечении город
            if (intersection && point1 && point2) {
                const findIntersection = game.settlements.find(s => utils.areEqual(s.x, intersection.x)
                    && utils.areEqual(s.y, intersection.y) && s.playerId !== '');
                if (findIntersection) {
                    console.log('found intersection');
                    continue; // можно переходить к другой паре дорог
                }
                const findPoint1 = availableSettlements.find(s => utils.areEqual(s.x, point1.x) && utils.areEqual(s.y, point1.y));
                if (findPoint1 && findPoint1.playerId === '') {
                    available.push(findPoint1); // Не занятый игроком добавляем
                }
                const findPoint2 = availableSettlements.find(s => utils.areEqual(s.x, point2.x) && utils.areEqual(s.y, point2.y));
                if (findPoint2 && findPoint2.playerId === '') {
                    available.push(findPoint2); // Не занятый игроком добавляем
                }
            }
        }
    }
    return available;
}
function isNeighborRoad(r1, r2) {
    let isNear = false;
    if (utils.areEqual(r1.from.x, r2.from.x) && utils.areEqual(r1.from.y, r2.from.y))
        isNear = true;
    if (utils.areEqual(r1.to.x, r2.from.x) && utils.areEqual(r1.to.y, r2.from.y))
        isNear = true;
    if (utils.areEqual(r1.from.x, r2.to.x) && utils.areEqual(r1.from.y, r2.to.y))
        isNear = true;
    if (utils.areEqual(r1.to.x, r2.to.x) && utils.areEqual(r1.to.y, r2.to.y))
        isNear = true;
    return isNear;
}
export function getAvailableRoads(game, playerId) {
    const available = [];
    const playerRoads = game.roads.filter(r => r.playerId === playerId);
    const playerSettlements = game.settlements.filter(s => s.playerId == playerId);
    // Поиск всех не занятых дорог из городов игрока
    for (const s of playerSettlements) {
        const roads = game.roads.filter(r => {
            if (r.playerId !== '') {
                return false;
            }
            if (utils.areEqual(r.from.x, s.x) && utils.areEqual(r.from.y, s.y))
                return true;
            if (utils.areEqual(r.to.x, s.x) && utils.areEqual(r.to.y, s.y))
                return true;
        });
        roads.forEach(r => {
            if (!available.find(_r => _r.id === r.id))
                available.push(r);
        });
    }
    // Поиск всех не занятых дорог продолжающих дороги игрока
    for (const r of playerRoads) {
        if (r.isEndPoint)
            continue;
        const roads = game.roads.filter(_r => {
            if (_r.playerId !== '') {
                return false;
            }
            if (utils.areEqual(_r.from.x, r.from.x) && utils.areEqual(_r.from.y, r.from.y))
                return true;
            else if (utils.areEqual(_r.to.x, r.from.x) && utils.areEqual(_r.to.y, r.from.y))
                return true;
            else if (utils.areEqual(_r.to.x, r.to.x) && utils.areEqual(_r.to.y, r.to.y))
                return true;
            else if (utils.areEqual(_r.from.x, r.to.x) && utils.areEqual(_r.from.y, r.to.y))
                return true;
            else
                return false;
        });
        roads.forEach(rx => {
            if (!available.find(ry => ry.id === rx.id))
                available.push(rx);
        });
    }
    return available;
}
export function getAvailableSetupSettlements(game, skipSpawnFilter) {
    let available = skipSpawnFilter
        ? game.settlements
        : game.settlements.filter(s => s.setupSpawnAllowed);
    const occupiedSettl = game.settlements.filter(s => s.playerId !== '');
    occupiedSettl.forEach(s => {
        const settlRadius2 = getSettlementsRadius2(game, s);
        available = available.filter(a => {
            return !settlRadius2.find(r2 => r2.id === a.id);
        });
    });
    return available;
}
export function getAvailableSetupRoads(game, settlement) {
    const available = [];
    let point = settlement;
    if (!settlement) {
        point = game.settlements.find(s => {
            if (s.playerId !== game.currentPlayerId)
                return false;
            const road = game.roads.find(r => {
                if (r.playerId !== game.currentPlayerId)
                    return false;
                if (utils.areEqual(r.from.x, s.x) && utils.areEqual(r.from.y, s.y)
                    || utils.areEqual(r.to.x, s.x) && utils.areEqual(r.to.y, s.y)) {
                    return true;
                }
                else
                    return false;
            });
            return !road;
        });
    }
    if (!point) {
        return [];
    }
    available.push(...game.roads.filter(r => utils.areEqual(r.from.x, point.x) && utils.areEqual(r.from.y, point.y)
        || utils.areEqual(r.to.x, point.x) && utils.areEqual(r.to.y, point.y)));
    return available;
}
// Ищет все города на радиусе 2 от исходного
function getSettlementsRadius2(game, settlement) {
    const raduis2 = [];
    // printCity(settlement);
    // Ищем все дороги из города на радиусе 1
    const roadsRadius1 = game.roads.filter(r => {
        if (utils.areEqual(r.from.x, settlement.x) && utils.areEqual(r.from.y, settlement.y))
            return true;
        else if (utils.areEqual(r.to.x, settlement.x) && utils.areEqual(r.to.y, settlement.y))
            return true;
        else
            return false;
    });
    // console.log('roads radius 1 found', roadsRadius1.length);
    // printRoads(roadsRadius1);
    // Добавляем все города с радиуса 1
    game.settlements.forEach(s => {
        roadsRadius1.forEach(r => {
            if (utils.areEqual(s.x, r.from.x) && utils.areEqual(s.y, r.from.y)) {
                if (!raduis2.find(_s => utils.areEqual(_s.x, s.x) && utils.areEqual(_s.y, s.y)))
                    raduis2.push(s);
            }
            if (utils.areEqual(s.x, r.to.x) && utils.areEqual(s.y, r.to.y)) {
                if (!raduis2.find(_s => utils.areEqual(_s.x, s.x) && utils.areEqual(_s.y, s.y)))
                    raduis2.push(s);
            }
        });
    });
    return raduis2;
}
function printRoads(roads, road) {
    if (road)
        console.log('Road', road.id, road.from.x, road.from.y, road.to.x, road.to.y);
    if (roads)
        roads.forEach(r => console.log('Road', r.id, r.from.x, r.from.y, r.to.x, r.to.y));
}
function printCity(cityes, city) {
    if (city)
        console.log('City', city.x, city.y);
    if (cityes)
        cityes.forEach(c => console.log('City', c.x, c.y));
}
export function isLegalExchange(give, take, rates) {
    let potential = 0;
    let desired = 0;
    let isLegal = true;
    Object.getOwnPropertyNames(give).forEach(k => {
        if (give[k] % rates[k] === 0) {
            potential += give[k] / rates[k];
        }
        else {
            isLegal = false;
        }
    });
    Object.getOwnPropertyNames(take).forEach(k => {
        desired += take[k];
    });
    return desired !== 0 && desired === potential && isLegal;
}
// хватает ресурсов для сделки
export function hasResourcesForDeal(player, required) {
    for (const [resource, amount] of Object.entries(required)) {
        const current = player.resources.get(resource) || 0;
        if (current < amount) {
            return false;
        }
    }
    return true;
}
