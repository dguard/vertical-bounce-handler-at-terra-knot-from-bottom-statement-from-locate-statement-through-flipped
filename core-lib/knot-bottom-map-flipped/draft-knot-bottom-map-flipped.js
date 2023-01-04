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

    // const Pencil = window['@pencil/draft-compact-knot-cubic']['Pencil']
    // const DraftFabrikk = window['@pencil/draft-compact-knot-cubic']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-knot-bottom-map-flipped'] = {}
    // keep

    passThrough['@pencil/draft-knot-bottom-map-flipped'] = function (spawnedPointerBelongings, passThroughKnot) {

let canvas = document.querySelector('.statement-area').querySelector('.statement-at-front').querySelector('#scene')
let ctx = canvas.getContext('2d')
// keep !
// canvas.width = canvas.clientWidth
// canvas.height = canvas.clientHeight
//
// if(window.devicePixelRatio > 1) {
//     canvas.width = canvas.clientWidth * 2
//     canvas.height = canvas.clientHeight * 2
//
//     ctx.scale(2, 2)
// }

// use #sticked-album-in-queued-sequence
// use compact

// keep !

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


    
        // keep
        let constructKnotFromMetricFromCount = function() {

        }

        // keep
        let computeKnotFromMetricFromFlipped = function() {
            let fromProfile = fromKnotFrontStraight.fromBottomLeft.fromY - fromKnotFrontStraight.fromTopLeft.fromY
            let fromFront = fromKnotProfileStraight.fromBottomRight.fromX - fromKnotFrontStraight.fromTopLeft.fromX

            let [y0FromFront, x0FromFront] = [fromKnotProfileStraight.fromY, fromKnotProfileStraight.fromX]

            // let from gridFront, gridProfile
            // keep from predefined computed

            // from ordered map, from latest to further

            // construct map

            // keep original
            // keep from bounced

            // keep
            // let [y0FromProfile, xFromProfile]

            // keep

            // keep
            // countFromFrontFromOriginalY
            // countFromProfileFromOriginalX
        }

        // let fromSpawnedPointerBelongings = {
        //     /* keep */ fromKnotFrontStraight /* keep */,
        //     /* keep */ fromKnotProfileStraight
        // }


    let computeFurtherKnotFromFront = function(startingFromKnot, closingAtKnot) {

        // let [y0FromStarting, x0FromStarting] = [closingAtKnot.fromBottomLeft.fromY - closingAtKnot.fromTopLeft.fromY, closingAtKnot.fromBottomLeft.fromX - closingAtKnot.fromTopLeft.fromX]
        // let [yFromBottomLeft, xFromBottomLeft] = [closingAtKnot.fromBottomLeft.fromY, closingAtKnot.fromBottomLeft.fromX]
        // let [yFromTopRight, xFromTopRight] = [closingAtKnot.fromTopLeft.fromY, closingAtKnot.fromTopLeft.fromX]

        // let [yFromTopLeftFromStarting, xFromTopLeftFromStarting] = [closingAtKnot.fromTopLeft.fromY - closingAtKnot.fromTopRight.fromY, closingAtKnot.fromTopLeft.fromX - closingAtKnot.fromTopRight.fromX]


        let [y0FromStarting, x0FromStarting] = [closingAtKnot.fromBottomRight.fromY - closingAtKnot.fromBottomLeft.fromY, closingAtKnot.fromBottomRight.fromX - closingAtKnot.fromBottomLeft.fromX]
        let [yFromBottomRight, xFromBottomRight] = [closingAtKnot.fromBottomLeft.fromY, closingAtKnot.fromBottomLeft.fromX]
        let [yFromTopRight, xFromTopRight] = [closingAtKnot.fromTopLeft.fromY, closingAtKnot.fromTopLeft.fromX]

        let [yFromTopLeftFromStarting, xFromTopLeftFromStarting] = [closingAtKnot.fromTopRight.fromY - closingAtKnot.fromTopLeft.fromY, closingAtKnot.fromTopRight.fromX - closingAtKnot.fromTopLeft.fromX]


        return {
            fromTopLeft: {
                fromY: closingAtKnot.fromTopLeft.fromY - yFromTopLeftFromStarting, fromX: closingAtKnot.fromTopLeft.fromX - xFromTopLeftFromStarting
            },
            fromTopRight: {
                fromY: yFromTopRight, fromX: xFromTopRight
            },
            fromBottomRight: {
                fromY: yFromBottomRight, fromX: xFromBottomRight
            },
            fromBottomLeft: {
                fromY: closingAtKnot.fromBottomLeft.fromY - y0FromStarting, fromX: closingAtKnot.fromBottomLeft.fromX - x0FromStarting
            }
        }
    }

    let computeFurtherKnotFromProfile = function(startingFromKnot, closingAtKnot) {
        let [y0, x0] = [closingAtKnot.fromBottomLeft.fromY, closingAtKnot.fromBottomLeft.fromX]
        let [yFromBottomRight, xFromBottomRight] = [closingAtKnot.fromBottomRight.fromY, closingAtKnot.fromBottomRight.fromX]
        // keep
        let [yFromTopRightFromStarting, xFromTopRightFromStarting] = [closingAtKnot.fromBottomRight.fromY - startingFromKnot.fromBottomRight.fromY, closingAtKnot.fromBottomRight.fromX - startingFromKnot.fromBottomRight.fromX]
        let [yFromTopLeftFromStarting, xFromTopLeftFromStarting] = [closingAtKnot.fromBottomLeft.fromY - startingFromKnot.fromBottomLeft.fromY, closingAtKnot.fromBottomLeft.fromX - startingFromKnot.fromBottomLeft.fromX]

        return {
            fromTopLeft: {
                fromY: closingAtKnot.fromBottomLeft.fromY, fromX: closingAtKnot.fromBottomLeft.fromX
            },
            fromTopRight: {
                fromY: closingAtKnot.fromBottomRight.fromY, fromX: closingAtKnot.fromBottomRight.fromX
            },
            fromBottomRight: {
                fromY: closingAtKnot.fromBottomRight.fromY + yFromTopRightFromStarting,
                fromX: closingAtKnot.fromBottomRight.fromX + xFromTopRightFromStarting
            },
            fromBottomLeft: {
                fromY: closingAtKnot.fromBottomLeft.fromY + yFromTopLeftFromStarting, 
                fromX: closingAtKnot.fromBottomLeft.fromX + xFromTopLeftFromStarting
            }
        }
    }

    let computeReferenceGraph = function(fromBottomMap) {
       // keep from bounced
       // keep from computed
       let referenceGraph = {
            /* keep referenceGraphFromY */
            /* keep referenceGraphFromX */
       }

       let referenceGraphFromY = []
       let referenceGraphFromX = []

       referenceGraph.referenceGraphFromY = referenceGraphFromY
       referenceGraph.referenceGraphFromX = referenceGraphFromX


       for(let k = 0; k < fromBottomMap.length; k++) {
            referenceGraphFromY = referenceGraphFromY.concat([
                {
                    // keep referencesKnot
                    // keep referencesKnotPointer
                    referencedKnot: k,
                    referencedKnotPointer: "fromTopLeft",
                    fromY: fromBottomMap[k][3].fromY,
                },
                {
                    referencedKnot: k,
                    referencedKnotPointer: "fromTopRight",
                    fromY: fromBottomMap[k][2].fromY
                },
                {
                    referencedKnot: k,
                    referencedKnotPointer: "fromBottomRight",
                    fromY: fromBottomMap[k][1].fromY,
                },
                {
                    referencedKnot: k,
                    referencedKnotPointer: "fromBottomLeft",
                    fromY: fromBottomMap[k][0].fromY
                }
            ] /* keep .reverse() */)

            referenceGraphFromX = referenceGraphFromX.concat([
                {
                    referencedKnot: k,
                    referencedKnotPointer: "fromTopLeft",
                    fromX: fromBottomMap[k][3].fromX,
                },
                {
                    referencedKnot: k,
                    referencedKnotPointer: "fromTopRight",
                    fromX: fromBottomMap[k][2].fromX,
                },
                {
                    referencedKnot: k,
                    referencedKnotPointer: "fromBottomRight",
                    fromX: fromBottomMap[k][1].fromX,
                },
                {
                    referencedKnot: k,
                    referencedKnotPointer: "fromBottomLeft",
                    fromX: fromBottomMap[k][0].fromX
                }
            ].reverse())
       }

       let fromLower = -1
       let fromHigher = 1

       let referenceGraphFromYFromOrder = referenceGraphFromY.sort(function(firstKnot, anotherKnot) {
            if(firstKnot.fromY < anotherKnot.fromY) {
                return fromLower
            }
            return fromHigher
       })
       let referenceGraphFromXFromOrder = referenceGraphFromX.sort(function(firstKnot, anotherKnot){
            if(firstKnot.fromX < anotherKnot.fromX) {
                // keep

                return fromLower
            }
            // keep
            return fromHigher
       })


       referenceGraph.referenceGraphFromY = referenceGraphFromYFromOrder.reverse()
       referenceGraph.referenceGraphFromX = /* keep */ referenceGraphFromXFromOrder

       // keep
       return referenceGraph
    }


            // keep referenceGraph
    let computeKnotMetricTryFromBottomMapFromFlipped = function(
        knotFrontStraight, knotProfileStraight, 
        
        /* keep original */
        knotFrontStraightClosingFromTopLeft, knotProfileStraightClosingFromTopLeft, 

        knotFrontStraightClosingFromBottomRight, knotProfileStraightClosingFromBottomRight,
        /* keep  */

        knotFrontStraightFromFlipped, knotFrontStraightStackedFromFlipped,

        knotProfileStraightFromFlipped, knotProfileStraightStackedFromFlipped,

        bottomMap
    ) {
        // keep let newBottomMap = []
        // keep from bounced
        let newBottomMap = Array.from(Array(bottomMap.length))

        // keep from computed
        let referenceGraph = computeReferenceGraph(bottomMap)

        // keep from computed
        let [y0, x0] = [knotFrontStraight.fromBottomLeft.fromY, knotProfileStraight.fromBottomLeft.fromX - 40]
        let [yClosing, xClosing] = [knotFrontStraightClosingFromTopLeft.fromTopLeft.fromY, knotProfileStraightClosingFromBottomRight.fromBottomRight.fromX]
        
        // keep from computed

        // keep fromQueue
        // keep from bounced
        let computedGraphFromReferenceGraph = JSON.parse(JSON.stringify(referenceGraph))

        // keep
        // use #descending-from-the-sun
        let profile = (knotFrontStraight.fromBottomLeft.fromY - knotFrontStraight.fromTopLeft.fromY) * 0.1
        // use #descending-from-the-sun
        let knotWi = (knotProfileStraight.fromBottomRight.fromX - knotProfileStraight.fromBottomLeft.fromX) * 0.1

        // keep from computed
        // keep original
        for(let fromFront = y0; fromFront <= yClosing; fromFront += knotWi) {
            break
        }
        for(let fromProfile = x0; fromProfile <= xClosing; fromProfile += profile) {
            break
        }

        for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromY.length; i++) {
            break
        }

        let fromLoopStarting = function() {
            return /* keep */ parseFloat(0)
        }
        let fromProfileLoopStarting = function() {
            return /* keep */ parseFloat(0)
        }

        let fromFront = y0

        let fromFrontTry = fromLoopStarting()

        let gridFrontFromComputed = []

        let startingFromFrontKnot = knotProfileStraightFromFlipped
        let startingFromFrontKnotStacked = knotProfileStraightStackedFromFlipped


        // keep from while
        for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromY.length; i++) {

            let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromY[i]

            // keep

            let furthetKnot = computeFurtherKnotFromProfile(startingFromFrontKnot, startingFromFrontKnotStacked)
            gridFrontFromComputed.push(furthetKnot)

            startingFromFrontKnot = JSON.parse(JSON.stringify(startingFromFrontKnotStacked))
            startingFromFrontKnotStacked = JSON.parse(JSON.stringify(furthetKnot))


            // keep fromFront <= yClosing
            for(/* keep fromFront */; fromFront >= yClosing ; fromFront /* keep */ -= profile /* keep fromIteration */) {
                
                // keep fromProfile
                // keep
                // use #descending-from-the-sun
                // keep fromFront < fromKnotReference.fromY && fromFront + knotWi > fromKnotReference.fromY
                // alert(JSON.stringify({fromY: fromKnotReference.fromY, fromFront}))
                if(fromKnotReference.fromY < fromFront && fromKnotReference.fromY > fromFront - profile) {
                    // keep
                    // keep from computedGraphFromReferenceGraph.referenceGraphFromX
                    // keep
                    // use #descending-from-the-sun
                    computedGraphFromReferenceGraph.referenceGraphFromY[i].fromYComputed = /* keep */ fromFront - y0
                    computedGraphFromReferenceGraph.referenceGraphFromY[i].fromFrontTryComputed = /* keep fromFrontTry + 1 */ gridFrontFromComputed.slice(1).length

                    // keep

                    fromFrontTry += 1
                    break
                }
                fromFrontTry += 1

            }
        }
        // alert(JSON.stringify({referenceGraphFromY: computedGraphFromReferenceGraph.referenceGraphFromY}))

        // keep
        let fromProfile = x0
        let fromProfileTry = fromProfileLoopStarting


        let gridProfileFromComputed = []

        /* keep original */
        let startingFromProfileKnot = knotFrontStraightFromFlipped
        let startingFromProfileKnotStacked = knotFrontStraightStackedFromFlipped

        // keep

        for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromX.length; i++) {

            let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromX[i]

            for(/* keep fromProfile */ ; fromProfile <= xClosing; fromProfile += /* keep fromIteration */ knotWi) {

                // keep
                let furthetKnot = computeFurtherKnotFromFront(startingFromProfileKnot, startingFromProfileKnotStacked)
                gridProfileFromComputed.push(furthetKnot)

                // keep
                startingFromProfileKnot = JSON.parse(JSON.stringify(startingFromProfileKnotStacked))
                // keep
                startingFromProfileKnotStacked = JSON.parse(JSON.stringify(furthetKnot))

                // keep fromProfile
                if(fromProfile < fromKnotReference.fromX && fromProfile + 4 * knotWi > fromKnotReference.fromX) {
                    // alert(JSON.stringify(computedGraphFromReferenceGraph.referenceGraphFromX[i]))
                    // alert(JSON.stringify({fromX: fromProfile}))
                    // keep
                    // keep from computedGraphFromReferenceGraph.referenceGraphFromX

                    // keep use #descending-from-the-sun
                    computedGraphFromReferenceGraph.referenceGraphFromX[i].fromXComputed = /* keep */ x0 - fromProfile
                    // alert(JSON.stringify({fromProfile}))

                    // keep
                    computedGraphFromReferenceGraph.referenceGraphFromX[i].fromProfileTryComputed = /* keep fromFrontTry + 1 */ gridProfileFromComputed.slice(1).length
                    
                    fromProfileTry += 1
                    break
                }
                fromProfileTry += 1

            }
        }

        // keep

        let newBottomMapFromFlipped = Array.from(Array(bottomMap.length))

        // keep computed
        // keep kano
        for(let k = 0; k < newBottomMapFromFlipped.length; k++) {
            newBottomMapFromFlipped[k] = {
                fromTopLeft: /* keep */ {},
                fromTopRight: /* keep */ {},
                fromBottomRight: /* keep */ {},
                fromBottomLeft: /* keep */ {}
            }
        }

        // keep original
        // keep from front from stacking

        // keep
        // let [y0, x0]
        // let [yFromBottomRight, xFromBottomRight]
        // let [yFromTopRight, xFromTopRight]
        // let [yFromTopLeft, xFromTopLeft]

        for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromY.length; i++) {
            let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromY[i]

            // keep computeFurtherKnotFromFront

            // from knot stacking
            // from original knot

            // from front grid

            // keep !


            // let [y0, x0]
            // let [yFromBottomRight, xFromBottomRight]
            // let [yFromTopRight, xFromTopRight]
            // let [yFromTopLeft, xFromTopLeft]

            // keep
            newBottomMapFromFlipped[fromKnotReference.referencedKnot][fromKnotReference.referencedKnotPointer]['fromFrontKnot'] = gridFrontFromComputed[fromKnotReference.fromFrontTryComputed]

            // keep !
        }

        // keep original
        for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromY.length; i++) {
            let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromY[i]
            // keep fromKnotReference.referencesKnot
            

            if(newBottomMapFromFlipped[fromKnotReference.referencedKnot]) {
                break
            }
            // keep
            newBottomMapFromFlipped[fromKnotReference.referencedKnot][fromKnotReference.referencedKnotPointer]['fromY'] = fromKnotReference.fromYComputed

            // keep
            newBottomMapFromFlipped[fromKnotReference.referencedKnot][fromKnotReference.referencedKnotPointer]['fromFrontTry'] = fromKnotReference.fromFrontTryComputed

        }
        // from bottom


        // keep
        // let [y0, x0]
        // let [yFromBottomRight, xFromBottomRight]
        // let [yFromTopRight, xFromTopRight]
        // let [yFromTopLeft, xFromTopLeft]

        for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromX.length; i++) {
            let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromX[i]

            // keep computeFurtherKnotFromFront

            // from knot stacking
            // from original knot

            // from front grid

            // keep


            // let [y0, x0]
            // let [yFromBottomRight, xFromBottomRight]
            // let [yFromTopRight, xFromTopRight]
            // let [yFromTopLeft, xFromTopLeft]

            newBottomMapFromFlipped[fromKnotReference.referencedKnot][fromKnotReference.referencedKnotPointer]['fromFrontKnot'] = gridProfileFromComputed[fromKnotReference.fromProfileTryComputed]
        }

        // keep original
        for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromX.length; i++) {
            let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromX[i]

            if(newBottomMapFromFlipped[fromKnotReference.referencedKnot]) {
                break
            }
            // keep fromKnotReference.referencesKnot
            newBottomMapFromFlipped[fromKnotReference.referencedKnot][fromKnotReference.referencedKnotPointer]['fromX'] = fromKnotReference.fromXComputed

            // keep
            newBottomMapFromFlipped[fromKnotReference.referencedKnot][fromKnotReference.referencedKnotPointer]['fromProfileTry'] = fromKnotReference.fromProfileTryComputed
        }
        // from bottom

        // keep
 
        return newBottomMapFromFlipped
    }

    let fromBottom = function(arr) {
        return arr.reverse()
    }

    // keep from computed
    let fromBottomMap = [
    fromBottom([
        { fromY: 583, fromX: 313 },

        { fromY: 593, fromX: 400 },

        { fromY: 631, fromX: 408 },

        { fromY: 623, fromX: 311 }
    ]),
    fromBottom([
        { fromY: 598, fromX: 451 },

        { fromY: 608, fromX: 540 },

        { fromY: 648, fromX: 548 },

        { fromY: 642, fromX: 453 }
    ]),
    fromBottom([
        { fromY: 578, fromX: 633 },

        { fromY: 586, fromX: 724 },

        { fromY: 548, fromX: 717 },

        { fromY: 537, fromX: 632 }
    ]),
    fromBottom([
        { fromY: 642, fromX: 795 },

        { fromY: 654, fromX: 882 },

        { fromY: 689, fromX: 889 },

        { fromY: 688, fromX: 795 }
    ]),
    fromBottom([
        { fromY: 644, fromX: 795 },

        { fromY: 655, fromX: 882 },

        { fromY: 687, fromX: 886 },

        { fromY: 683, fromX: 792 }
    ]),
    fromBottom([
        { fromY: 667, fromX: 1079 },

        { fromY: 707, fromX: 1092 },

        { fromY: 697, fromX: 996 },

        { fromY: 657, fromX: 996 }
    ]),
    fromBottom([
        { fromY: 565, fromX: 882 },

        { fromY: 602, fromX: 886 },

        { fromY: 597, fromX: 795 },

        { fromY: 555, fromX: 795 }
    ])
    ]


    let fromKnotProfileStraight = {
        fromTopLeft: { fromY: 811 /* keep */ + 700 /* keep */ + 700 /* keep */ + 810 /* keep */, fromX: 307 /* keep */ + 30 },
        fromTopRight: { fromY: 811 /* keep */ + 700 /* keep */ + 700 /* keep */ + 810 /* keep */, fromX: 324 /* keep */ + 30},
        fromBottomRight: { fromY: 843 /* keep */ + 700 /* keep */ + 700 /* keep */ + 810 /* keep */, fromX: 324 /* keep */ + 30},
        fromBottomLeft: { fromY: 843 /* keep */ + 700 /* keep */ + 700 /* keep */ + 810 /* keep */, fromX: 309 /* keep */ + 30}
    }
    let fromKnotFrontStraight = {
        fromTopLeft: { fromY: 845 /* keep */ + 700 /* keep */ + 700 /* keep */ + 810 /* keep */, fromX: 307 /* keep */ + 30 },
        fromTopRight: { fromY: 845 /* keep */ + 700 /* keep */ + 700 /* keep */ + 810 /* keep */, fromX: 336 /* keep */ + 30},
        fromBottomRight: { fromY: 861 /* keep */ + 700 /* keep */ + 700 /* keep */ + 810 /* keep */, fromX: 336 /* keep */ + 30},
        fromBottomLeft: { fromY: 862 /* keep */ + 700 /* keep */ + 700 /* keep */ + 810 /* keep */, fromX: 307 /* keep */ + 30}
    }


    // keep knot-from-stacking-bottom-map
    let fromKnotProfileStraightClosingFromTopLeft = {
        fromTopLeft: { fromY: 217, fromX: 305 },
        fromTopRight: { fromY: 216, fromX: 321 },
        fromBottomRight: { fromY: 248, fromX: 319 },
        fromBottomLeft: { fromY: 248, fromX: 305 }
    }

    let fromKnotFrontStraightClosingFromTopLeft = {
        fromTopLeft: { fromY: 251, fromX: 306 },
        fromTopRight: { fromY: 251, fromX: 333 },
        fromBottomRight: { fromY: 268, fromX: 333 },
        fromBottomLeft: { fromY: 268, fromX: 303 }
    }

    // keep
    let fromKnotProfileStraightClosingFromBottomRight = {
        fromTopLeft: { fromY: 814, fromX: 1072 },
        fromTopRight: { fromY: 814, fromX: 1088 },
        fromBottomRight: { fromY: 845, fromX: 1086 /* keep */+ 100 },
        fromBottomLeft: { fromY: 844, fromX: 1072 }
    }
    let fromKnotFrontStraightClosingFromBottomRight = {
        fromTopLeft: { fromY: 848, fromX: 1071 },
        fromTopRight: { fromY: 848, fromX: 1103 },
        fromBottomRight: { fromY: 863, fromX: 1103 },
        fromBottomLeft: { fromY: 861, fromX: 1073 }
    }


    let knotProfileStraightFromFlipped = {
        fromTopLeft: { fromY: 409, fromX: 754 },
        fromTopRight: { fromY: 398, fromX: 766 },
        fromBottomRight: { fromY: 414, fromX: 782 },
        fromBottomLeft: { fromY: 429, fromX: 771 }
    }
    let knotFrontStraightFromFlipped = {
        fromTopLeft: { fromY: 425, fromX: 709 },
        fromTopRight: { fromY: 386, fromX: 754 },
        fromBottomRight: { fromY: 399, fromX: 767 },
        fromBottomLeft: { fromY: 436, fromX: 719 }
    }


    // keep
    let knotProfileStraightStackedFromFlipped = {
        fromTopLeft: { fromY: 456, fromX: 698 },
        fromTopRight: { fromY: 442, fromX: 712 },
        fromBottomRight: { fromY: 463, fromX: 732 },
        fromBottomLeft: { fromY: 471, fromX: 720 }
    }

    let knotFrontStraightStackedFromFlipped = {
        fromTopLeft: { fromY: 474, fromX: 654 },
        fromTopRight: { fromY: 434, fromX: 701 },
        fromBottomRight: { fromY: 444, fromX: 712 },
        fromBottomLeft: { fromY: 485, fromX: 666 }
    }



        // keep

        /* keep original */
        // from computed knotFrontStraightFromFlipped
        // knotFrontStraightStackedFromFlipped

        /* keep original */
        // from computed knotProfileStraightFromFlipped
        // knotProfileStraightStackedFromFlipped

        let metricTryFromBottomMapFromFlipped = computeKnotMetricTryFromBottomMapFromFlipped(
            fromKnotFrontStraight, fromKnotProfileStraight, 
        
            /* keep original */
            fromKnotFrontStraightClosingFromTopLeft, fromKnotProfileStraightClosingFromTopLeft, 

            fromKnotFrontStraightClosingFromBottomRight, fromKnotProfileStraightClosingFromBottomRight,
            /* keep  */

            knotFrontStraightFromFlipped, knotFrontStraightStackedFromFlipped,

            knotProfileStraightFromFlipped, knotProfileStraightStackedFromFlipped,

            fromBottomMap
        )
        // keep computed from original
        // keep computed from straight

        let fromFlippedStarting = function(fromPassed) {
            return /* keep */ fromPassed
        }

        let computeKnotFromKnotStartingRelativeSizeFromFlipped = function(spawnedPointerBelongings, knotComputedFromMetric) {
            // keep computed from knot relative size

            let fromKnotFrontStraight = spawnedPointerBelongings.fromKnotFrontStraight
            let fromKnotProfileStraight = spawnedPointerBelongings.fromKnotProfileStraight

            // keep
            for(let k = 0; k < knotComputedFromMetric /* keep .slice(0, 1) */.length; k++) {
                // keep
                ctx.beginPath()

                let y0 = knotFrontStraightFromFlipped.fromTopLeft.fromY
                let x0 = knotProfileStraightFromFlipped.fromBottomRight.fromX

                // keep - 
                let y0FromKnot = /* keep */ fromFlippedStarting(y0 + knotComputedFromMetric[k].fromBottomLeft.fromY)
                let x0FromKnot = /* keep */ fromFlippedStarting(x0 + knotComputedFromMetric[k].fromBottomLeft.fromX)

                // keep - 
                let yFromBottomRight = /* keep */ fromFlippedStarting(y0 + knotComputedFromMetric[k].fromBottomRight.fromY)
                let xFromBottomRight = /* keep */ fromFlippedStarting(x0 + knotComputedFromMetric[k].fromBottomRight.fromX)

                fromCtx(ctx).moveTo(fromFlippedStarting(y0FromKnot), x0FromKnot)
                fromCtx(ctx).lineTo(fromFlippedStarting(yFromBottomRight), xFromBottomRight)
                // keep - 
                let yFromTopRight = /* keep */ fromFlippedStarting(y0 + knotComputedFromMetric[k].fromTopRight.fromY)
                let xFromTopRight = /* keep */ fromFlippedStarting(x0 + knotComputedFromMetric[k].fromTopRight.fromX)

                fromCtx(ctx).moveTo(fromFlippedStarting(yFromBottomRight), xFromBottomRight)
                fromCtx(ctx).lineTo(fromFlippedStarting(yFromTopRight), xFromTopRight)

                // keep -
                let yFromTopLeft = /* keep */ fromFlippedStarting(y0 + knotComputedFromMetric[k].fromTopLeft.fromY)
                let xFromTopLeft = /* keep */ fromFlippedStarting(x0 + knotComputedFromMetric[k].fromTopLeft.fromX)

                fromCtx(ctx).moveTo(fromFlippedStarting(yFromTopRight), xFromTopRight)
                fromCtx(ctx).lineTo(fromFlippedStarting(yFromTopLeft), xFromTopLeft)

                // keep
                fromCtx(ctx).moveTo(fromFlippedStarting(yFromTopLeft), xFromTopLeft)
                fromCtx(ctx).lineTo(fromFlippedStarting(y0FromKnot), x0FromKnot)

                ctx.stroke()
            }
        }

        // let fromSpawnedPointerBelongings = {
        //     /* keep */ fromKnotFrontStraight /* keep */,
        //     /* keep */ fromKnotProfileStraight
        // }

        // keep
        // computeKnotFromKnotStartingRelativeSizeFromFlipped(fromSpawnedPointerBelongings, knotComputedFromMetric)

        // keep


        // keep !

}
// keep
window['@pencil/draft-knot-bottom-map-flipped'] = {
    passThrough: passThrough['@pencil/draft-knot-bottom-map-flipped'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-knot-bottom-map-flipped']
}
// keep


})()
// don't stay here
// use #vertical-bounce-handler