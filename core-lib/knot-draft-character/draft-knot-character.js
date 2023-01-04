// keep

// use bottom-statement

// keep !

// use #vertical-bounce-handler-at-pencil-from-knot
// use bottom-statement

// it is very hard to use "const"

// use bottom-statement

// it should be const in ctx knot in definition

(function() {
    let passThrough = {}
    // keep

    // keep
    // const Pencil = window['@pencil/draft-compact-knot-cubic']['Pencil']
    // const DraftFabrikk = window['@pencil/draft-compact-knot-cubic']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-knot-character'] = {}
    // keep

    passThrough['@pencil/draft-knot-character'] = function (spawnedPointerBelongings, passThroughKnot) {

    // keep
    let ctx = document.querySelector('#scene').getContext('2d')
    return


        // keep
        let PROJECTION_CENTER_Y = /* keep 250 */ 100
        let PROJECTION_CENTER_X = 100

        // keep
        let calc = function(expression) {
            return expression
        }

        let fromProjectionCenter = function(args) {
            // keep
            let [y,x] = args
            return [
                y + PROJECTION_CENTER_Y,
                x + PROJECTION_CENTER_X + 50
            ]
        }

        // keep
        // let /* keep original */ /* keep knot */ [y0, x0] = fromProjectionCenter([100, 100])
        // let /* keep original */ /* keep knot */ [y0Closing, x0Closing] = fromProjectionCenter([200, 100])
        // let /* keep original */ /* keep knot */ [y1, x1] = fromProjectionCenter([400, 100])
        // let /* keep original */ /* keep knot */ [y2, x2] = fromProjectionCenter([400, 200])

        // keep original
        // keep front knot

        // let /* keep knot */ [y0, x0] = fromProjectionCenter([100, 100])
        // let /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [400, 100])
        // let /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [400, 200])
        // let /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, 200])


        let fromCtx = function(ctx) {

            return {
                moveTo: function(y, x) {
                    return ctx.moveTo(x, y)
                },
                lineTo: function(y, x) {
                    return ctx.lineTo(x, y)
                },

                // keep
                arcTo: function(y1, x1, y2, x2, radius) {
                    return ctx.arcTo(x1, y1, x2, y2, radius)
                },
                ellipse: function(y, x, yRadius, xRadois, rotation, startAngle, endAngle) {
                    return ctx.ellipse(x, y, xRadois, yRadius, rotation, startAngle, endAngle)
                }

            }
        }


        let constructCharacterSideHandlers = function(characterSideHandlers) {
            let ctx = document.querySelector('.statement-at-front').querySelector('#scene').getContext('2d')

            // use #descending-from-the-sun
            let circuitStartingFrom = characterSideHandlers[0]

            ctx.beginPath()
            fromCtx(ctx).moveTo(circuitStartingFrom[0].fromY, circuitStartingFrom[0].fromX)


            for(let i = 0; i < circuitStartingFrom.length; i++) {
                fromCtx(ctx).lineTo(circuitStartingFrom[i].fromY, circuitStartingFrom[i].fromX)
                fromCtx(ctx).moveTo(circuitStartingFrom[i].fromY, circuitStartingFrom[i].fromX)
            }
            fromCtx(ctx).lineTo(circuitStartingFrom[0].fromY, circuitStartingFrom[0].fromX)

            ctx.stroke()

            // keep
            circuitStartingFrom = characterSideHandlers[1]

            ctx.beginPath()
            fromCtx(ctx).moveTo(circuitStartingFrom[0].fromY, circuitStartingFrom[0].fromX)


            for(let i = 0; i < circuitStartingFrom.length; i++) {
                fromCtx(ctx).lineTo(circuitStartingFrom[i].fromY, circuitStartingFrom[i].fromX)
                fromCtx(ctx).moveTo(circuitStartingFrom[i].fromY, circuitStartingFrom[i].fromX)
            }
            fromCtx(ctx).lineTo(circuitStartingFrom[0].fromY, circuitStartingFrom[0].fromX)

            ctx.stroke()
        }


        let constructCharacterCircuit = function(circuitStartingFrom, circuitClosing) {
            let ctx = document.querySelector('.statement-at-front').querySelector('#scene').getContext('2d')

            ctx.beginPath()
            // use #descending-from-the-sun
            // fromCtx(ctx).moveTo(circuitStartingFrom[0].fromY, circuitStartingFrom[0].fromX)
            // fromCtx(ctx).lineTo(circuitClosing[0].fromY, circuitClosing[0].fromX)


            for(let i = 0; i < circuitStartingFrom.length; i++) {
                fromCtx(ctx).moveTo(circuitStartingFrom[i].fromY, circuitStartingFrom[i].fromX)

                fromCtx(ctx).lineTo(circuitClosing[i].fromY, circuitClosing[i].fromX)
            }
            ctx.stroke()
        }

        let constructCharacterCircuitStartingFrom = function(circuitStartingFrom) {
            let ctx = document.querySelector('.statement-at-front').querySelector('#scene').getContext('2d')

            ctx.beginPath()
            // use #descending-from-the-sun
            fromCtx(ctx).moveTo(circuitStartingFrom[0].fromY, circuitStartingFrom[0].fromX)
            
            for(let i = 1; i < circuitStartingFrom.length; i++) {
                fromCtx(ctx).lineTo(circuitStartingFrom[i].fromY, circuitStartingFrom[i].fromX)

                fromCtx(ctx).moveTo(circuitStartingFrom[i].fromY, circuitStartingFrom[i].fromX)
            }
            fromCtx(ctx).lineTo(circuitStartingFrom[0].fromY, circuitStartingFrom[0].fromX)

            ctx.stroke()    
        }


        let constructCharacterCircuitClosing = constructCharacterCircuitStartingFrom

        let constructCharacterLocator = constructCharacterCircuitStartingFrom
        let constructCharacterRect = constructCharacterCircuitStartingFrom

        let constructCharacterMiddle = constructCharacterCircuitStartingFrom

        let constructCharacterDirection = constructCharacterCircuitStartingFrom


        // keep construction perspective
        // keep construction viewport
        // keep viewported map
        // keep character

        let characterDirection = [
            { fromY: 378, fromX: 487 /* keep */ + 400 },
            { fromY: 396, fromX: 466 /* keep */ + 400},
            { fromY: 401, fromX: 471 /* keep */ + 400},
            { fromY: 384, fromX: 490 /* keep */ + 400}
        ]

        let characterMiddle = [
            { fromY: 414, fromX: 496 /* keep */ + 400},
            { fromY: 419, fromX: 489 /* keep */ + 400},
            { fromY: 383, fromX: 447 /* keep */ + 400},
            { fromY: 375, fromX: 453 /* keep */ + 400}
        ]

        let characterRect = [{ fromY: 387, fromX: 483 /* keep */ + 400 },
            { fromY: 387, fromX: 499 /* keep */ + 400},
            { fromY: 371, fromX: 499 /* keep */ + 400},
            { fromY: 371, fromX: 483 /* keep */ + 400}
        ]

        let characterLocator = [
            { fromY: 412, fromX: 446 /* keep */ + 400},
            { fromY: 418, fromX: 451 /* keep */ + 400},
            { fromY: 414, fromX: 456 /* keep */ + 400},
            { fromY: 409, fromX: 449 /* keep */ + 400}
        ]

        let characterSideHandlers = [[
            { fromY: 367, fromX: 394 /* keep */ + 400},
            { fromY: 371, fromX: 394 /* keep */ + 400},
            { fromY: 371, fromX: 501 /* keep */ + 400},
            { fromY: 367, fromX: 501 /* keep */ + 400}
        ], [
            { fromY: 373, fromX: 498 /* keep */ + 400},
            { fromY: 488, fromX: 498 /* keep */ + 400},
            { fromY: 488, fromX: 502 /* keep */ + 400},
            { fromY: 373, fromX: 502 /* keep */ + 400},
        ]]



        let characterCircuitClosing = [
            { fromY: 230, fromX: 440 /* keep */ + 400},
            { fromY: 270, fromX: 337 /* keep */ + 400},
            { fromY: 361, fromX: 289 /* keep */ + 400},
            { fromY: 471, fromX: 289 /* keep */ + 400},
            { fromY: 546, fromX: 359 /* keep */ + 400},
            { fromY: 589, fromX: 468 /* keep */ + 400},
            { fromY: 550, fromX: 577 /* keep */ + 400},
            { fromY: 457, fromX: 641 /* keep */ + 400},
            { fromY: 376, fromX: 655 /* keep */ + 400},
            { fromY: 297, fromX: 616 /* keep */ + 400},
            { fromY: 242, fromX: 543 /* keep */ + 400}
        ]
        let characterCircuitStartingFrom = [
            { fromY: 371, fromX: 466 /* keep */ + 400}, { fromY: 378, fromX: 451 /* keep */ + 400}, { fromY: 393, fromX: 444 /* keep */ + 400}, { fromY: 409, fromX: 442 /* keep */ + 400}, { fromY: 422, fromX: 453 /* keep */ + 400}, { fromY: 427, fromX: 470 /* keep */ + 400}, { fromY: 424, fromX: 487 /* keep */ + 400}, { fromY: 412, fromX: 498 /* keep */ + 400}, { fromY: 396, fromX: 501 /* keep */ + 400}, { fromY: 382, fromX: 493 /* keep */ + 400}, { fromY: 376, fromX: 483 /* keep */ + 400}
        ]

        let rotateFrom = function() {

            // startingFrom, initialPPosition
            // closing, position
        }

        let constructRect = function(rectArr) {

            for(let i = 0; i < rectArr[i].length; i++) {
                let rect = rectArr[i]

                constructCharacterCircuitStartingFrom(rect)
            }
        }

        let constructMapPointerBelongings = constructCharacterCircuitStartingFrom
        let constructProfileMetric = constructCharacterCircuitStartingFrom
        let constructFrontMetric = constructCharacterCircuitStartingFrom

        let constructMetricRect = constructCharacterCircuitStartingFrom
        let constructDistanceExact = constructCharacterCircuitStartingFrom
        let constructMeleeDistance = constructCharacterCircuitStartingFrom

        let constructDistanceLocator = constructCharacterCircuitStartingFrom
        let constructLocator = constructCharacterCircuitStartingFrom
        let constructDistanceMiddle = constructCharacterCircuitStartingFrom

        let constructSideFirst = constructCharacterCircuitStartingFrom
        let constructSideAnother = constructCharacterCircuitStartingFrom

        let constructLocatorFirst = constructCharacterCircuitStartingFrom
        let constructLocatorAnother = constructCharacterCircuitStartingFrom


let fromLocatorAnother = [
    { fromY: 413, fromX: 855 },
    { fromY: 822, fromX: 617 }
]

let fromLocatorFirst = [
    { fromY: 410, fromX: 850 },
    { fromY: 525, fromX: 407 }
]


let fromSideAnother = [
    { fromY: 411, fromX: 898 },
    { fromY: 822, fromX: 617 }
]

let fromSideFirst = [
    { fromY: 371, fromX: 855 },
    { fromY: 524, fromX: 407 }
]




let fromComputedFromMap = [
    { fromY: 369, fromX: 902 },
    { fromY: 368, fromX: 377 },
    { fromY: 826, fromX: 377 },
    { fromY: 827, fromX: 899 }
]

let fromProfileMetric = [
    { fromY: 818, fromX: 378 },
    { fromY: 818, fromX: 386 },
    { fromY: 803, fromX: 386 },
    { fromY: 803, fromX: 379 }
]

let fromFrontMetric = [
    { fromY: 828, fromX: 379 },
    { fromY: 826, fromX: 415 },
    { fromY: 821, fromX: 415 },
    { fromY: 821, fromX: 377 }
]


let fromMetricRect = [
    { fromY: 828, fromX: 376 },
    { fromY: 828, fromX: 439 },
    { fromY: 774, fromX: 441 },
    { fromY: 775, fromX: 376 }
]

let fromDistanceExact = [
    { fromY: 468, fromX: 726 },
    { fromY: 508, fromX: 760 },
    { fromY: 502, fromX: 768 },
    { fromY: 461, fromX: 733 }
]

let fromMeleeDistance = [
    { fromY: 521, fromX: 598 },
    { fromY: 625, fromX: 681 },
    { fromY: 619, fromX: 695 },
    { fromY: 514, fromX: 609 }
]


let fromDistanceLocator = [
    { fromY: 413, fromX: 900 },
    { fromY: 370, fromX: 855 }
]
let fromLocator = [
    { fromY: 413, fromX: 856 },
    { fromY: 408, fromX: 850 }
]


let fromDistanceMiddle = [
    { fromY: 534, fromX: 386 },
    { fromY: 831, fromX: 599 },
    { fromY: 822, fromX: 620 },
    { fromY: 523, fromX: 408 }
]

let fromRect = [
    [
        { fromY: 555, fromX: 745 },
        { fromY: 595, fromX: 745 },
        { fromY: 595, fromX: 835 },
        { fromY: 564, fromX: 831 }
    ],
    [
        { fromY: 540, fromX: 588 },
        { fromY: 578, fromX: 588 },
        { fromY: 588, fromX: 676 },
        { fromY: 551, fromX: 676 }
    ],
    [
        { fromY: 644, fromX: 746 },
        { fromY: 682, fromX: 746 },
        { fromY: 687, fromX: 836 },
        { fromY: 652, fromX: 832 }
    ],
    [
        { fromY: 601, fromX: 414 },
        { fromY: 636, fromX: 414 },
        { fromY: 646, fromX: 505 },
        { fromY: 610, fromX: 501 }
    ],
    [
        { fromY: 583, fromX: 280 },
        { fromY: 627, fromX: 280 },
        { fromY: 629, fromX: 368 },
        { fromY: 594, fromX: 364 }
    ]
]

let constructCharacterBottomStatement = constructCharacterCircuitStartingFrom
let constructRectFromCharacterBottomStatement = constructCharacterCircuitStartingFrom
let constructRectVerticalFromCharacterBottomStatement = constructCharacterCircuitStartingFrom


let fromCharacterBottomStatement = [
    { fromY: 568, fromX: 1038 },
    { fromY: 817, fromX: 618 },
    { fromY: 524, fromX: 405 },
    { fromY: 299, fromX: 814 }
]

let fromRectFromCharacterBottomStatement = [
    { fromY: 575, fromX: 1014 },
    { fromY: 567, fromX: 1025 },
    { fromY: 457, fromX: 936 },
    { fromY: 471, fromX: 917 }
]
let fromRectVerticalFromCharacterBottomStatement = [
    { fromY: 599, fromX: 925 },
    { fromY: 616, fromX: 940 },
    { fromY: 576, fromX: 1000 },
    { fromY: 564, fromX: 988 }
]

        constructCharacterBottomStatement(fromCharacterBottomStatement)
        constructRectFromCharacterBottomStatement(fromRectFromCharacterBottomStatement)
        constructRectVerticalFromCharacterBottomStatement(fromRectVerticalFromCharacterBottomStatement)
        // from character-bottom-statement


        constructRect(fromRect)

        constructLocatorAnother(fromLocatorAnother)
        constructLocatorFirst(fromLocatorFirst)
        constructSideAnother(fromSideAnother)
        constructSideFirst(fromSideFirst)

        constructMapPointerBelongings(fromComputedFromMap)
        constructProfileMetric(fromProfileMetric)
        constructFrontMetric(fromFrontMetric)
        constructMetricRect(fromMetricRect)
        // from-straight-map

        constructDistanceExact(fromDistanceExact)
        constructMeleeDistance(fromMeleeDistance)
        constructDistanceLocator(fromDistanceLocator)
        constructLocator(fromLocator)
        constructDistanceMiddle(fromDistanceMiddle)




        // rotateFrom(sideHandler, startingFrom, closing)

        // constructRotatingCircuit()

        constructCharacterDirection(characterDirection)

        constructCharacterMiddle(characterMiddle)
        constructCharacterRect(characterRect)
        constructCharacterLocator(characterLocator)

        constructCharacterSideHandlers(characterSideHandlers)

        constructCharacterCircuit(characterCircuitStartingFrom, characterCircuitClosing)
        constructCharacterCircuitClosing(characterCircuitClosing)
        constructCharacterCircuitStartingFrom(characterCircuitStartingFrom)


        
    
        // keep
        // fromCtx(ctx).moveTo(400 + 250 + 100 + 50, 200 + 200 + 100)
        // fromCtx(ctx).ellipse(400 + 250 + 100 + 50, 200 + 200, /* keep 50 */ 100, 100, calc(0), calc(0), calc(180 * 2))

        ctx.stroke()

}
// keep
window['@pencil/draft-knot-character'] = {
    passThrough: passThrough['@pencil/draft-knot-character'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-knot-character']
}
// keep

})()