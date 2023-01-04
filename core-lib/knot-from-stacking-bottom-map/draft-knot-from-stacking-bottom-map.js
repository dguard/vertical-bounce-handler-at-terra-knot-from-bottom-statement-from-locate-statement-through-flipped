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
    passThroughFromBottom['@pencil/draft-knot-from-stacking-bottom-map'] = {}
    // keep

    passThrough['@pencil/draft-knot-from-stacking-bottom-map'] = function (spawnedPointerBelongings, passThroughKnot) {

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


    
        let constructKnotFromBottomMapFromStacking = function(knotFromBottomMap) {
            ctx.beginPath()

            let [y0, x0] = [knotFromBottomMap.fromBottomLeft.fromY, knotFromBottomMap.fromBottomLeft.fromX]

            // keep
            fromCtx(ctx).moveTo(y0 /* keep */ /* keep */  /* keep */ + 200 /* keep */ - 10, x0)
            fromCtx(ctx).lineTo(knotFromBottomMap.fromBottomRight.fromY /* keep */  /* keep */ + 200 /* keep */ - 10, knotFromBottomMap.fromBottomRight.fromX)

            // keep
            fromCtx(ctx).moveTo(knotFromBottomMap.fromBottomRight.fromY /* keep */  /* keep */ + 200 /* keep */- 10, knotFromBottomMap.fromBottomRight.fromX)
            fromCtx(ctx).lineTo(knotFromBottomMap.fromTopRight.fromY /* keep */  /* keep */ + 200 /* keep */- 10, knotFromBottomMap.fromTopRight.fromX)

            // // keep
            fromCtx(ctx).moveTo(knotFromBottomMap.fromTopRight.fromY /* keep */ /* keep */ + 200 /* keep */- 10, knotFromBottomMap.fromTopRight.fromX)
            fromCtx(ctx).lineTo(knotFromBottomMap.fromTopLeft.fromY /* keep */ /* keep */ + 200 /* keep */- 10, knotFromBottomMap.fromTopLeft.fromX)

            // // keep
            fromCtx(ctx).moveTo(knotFromBottomMap.fromTopLeft.fromY /* keep */ /* keep */ + 200 /* keep */- 10, knotFromBottomMap.fromTopLeft.fromX)
            fromCtx(ctx).lineTo(y0 /* keep */ /* keep */ + 200 /* keep */- 10, x0)

            ctx.stroke()
        }


        let constructKnotFromBottomMap = function(knotFromBottomMap) {

            ctx.beginPath()

            let [y0, x0] = [knotFromBottomMap.fromBottomLeft.fromY, knotFromBottomMap.fromBottomLeft.fromX]

            // keep
            fromCtx(ctx).moveTo(y0, x0)
            fromCtx(ctx).lineTo(knotFromBottomMap.fromBottomRight.fromY, knotFromBottomMap.fromBottomRight.fromX)

            // keep
            fromCtx(ctx).moveTo(knotFromBottomMap.fromBottomRight.fromY, knotFromBottomMap.fromBottomRight.fromX)
            fromCtx(ctx).lineTo(knotFromBottomMap.fromTopRight.fromY, knotFromBottomMap.fromTopRight.fromX)

            // // keep
            fromCtx(ctx).moveTo(knotFromBottomMap.fromTopRight.fromY, knotFromBottomMap.fromTopRight.fromX)
            fromCtx(ctx).lineTo(knotFromBottomMap.fromTopLeft.fromY, knotFromBottomMap.fromTopLeft.fromX)

            // // keep
            fromCtx(ctx).moveTo(knotFromBottomMap.fromTopLeft.fromY, knotFromBottomMap.fromTopLeft.fromX)
            fromCtx(ctx).lineTo(y0, x0)

            ctx.stroke()
        }
        let constructStraightProfileFromFlipped = constructKnotFromBottomMapFromStacking
        let constructStraightFrontFromFlipped = constructKnotFromBottomMapFromStacking

        let knotStraightProfileFromFlipped = {
            fromTopLeft: { fromY: 1026, fromX: 431 },
            fromTopRight: { fromY: 1015, fromX: 444 },
            fromBottomRight: { fromY: 991, fromX: 428 },
            fromBottomLeft: { fromY: 1006, fromX: 415 }

            // keep
            // fromTopLeft: { fromY: 1225, fromX: 411 },
            // fromTopRight: { fromY: 1213, fromX: 427 },
            // fromBottomRight: { fromY: 1233, fromX: 446 },
            // fromBottomLeft: { fromY: 1243, fromX: 432 }
        }

        let knotStraightFrontFromFlipped = {
            fromTopLeft: { fromY: 1031, fromX: 432 },
            fromTopRight: { fromY: 989, fromX: 482 },
            fromBottomRight: { fromY: 1003, fromX: 495 },
            fromBottomLeft: { fromY: 1040, fromX: 448 }
            
            // keep
            // fromTopLeft: { fromY: 1205, fromX: 481 },
            // fromTopRight: { fromY: 1219, fromX: 492 },
            // fromBottomRight: { fromY: 1259, fromX: 448 },
            // fromBottomLeft: { fromY: 1243, fromX: 431 }
        }

        let constructStraightProfileClosingFromFlipped = constructKnotFromBottomMapFromStacking
        let constructStraightFrontClosingFromFlipped = constructKnotFromBottomMapFromStacking

        let knotStraightProfileClosingFromFlipped = {
            fromTopLeft: { fromY: 593, fromX: 920 },
            
            fromTopRight: { fromY: 583, fromX: 934 },
            
            fromBottomRight: { fromY: 560, fromX: 913 },
            
            fromBottomLeft: { fromY: 572, fromX: 901 }

            // keep
            // fromTopLeft: { fromY: 789, fromX: 903 },
            // fromTopRight: { fromY: 777, fromX: 916 },
            // fromBottomRight: { fromY: 801, fromX: 933 },
            // fromBottomLeft: { fromY: 811, fromX: 921 }
        }
        let knotStraightFrontClosingFromFlipped = {
            fromTopLeft: { fromY: 624, fromX: 889 },
            fromTopRight: { fromY: 584, fromX: 934 },
            fromBottomRight: { fromY: 597, fromX: 947 },
            fromBottomLeft: { fromY: 641, fromX: 901 }

            // keep
            // fromTopLeft: { fromY: 799, fromX: 934 },
            // fromTopRight: { fromY: 811, fromX: 946 },
            // fromBottomRight: { fromY: 852, fromX: 898 },
            // fromBottomLeft: { fromY: 841, fromX: 887 }
        }


        let knotFromBottomMap = {
            fromTopLeft: { fromY: /* keep */ 2156, fromX: 297 },

            fromTopRight: { fromY: /* keep */ 2157, fromX: 1068 },

            fromBottomRight: { fromY: /* keep */ 2485, fromX: 1064 },
            
            fromBottomLeft: { fromY: /* keep */ 2502, fromX: 293 }
            
            /* keep from bottom map stack\ing */
            // fromTopLeft: { fromY: 781 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 318 },
            // fromTopRight: { fromY: 425 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 800 },
            // fromBottomRight: { fromY: 661 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 1011 },
            // fromBottomLeft: { fromY: 1016 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 512 }
        }

        let fromKnotProfileStraightFromBottomMap = {
            fromTopLeft: { fromY: 2440, fromX: 306 },
            fromTopRight: { fromY: 2440, fromX: 323 },
            fromBottomRight: { fromY: 2471, fromX: 323 },
            fromBottomLeft: { fromY: 2472, fromX: 310 }            

            // keep from bottom map
            // fromTopLeft: { fromY: 1220, fromX: 402 },
            // fromTopRight: { fromY: 1214, fromX: 416 },
            // fromBottomRight: { fromY: 1238, fromX: 437 },
            // fromBottomLeft: { fromY: 1245, fromX: 428 }
        }

        let fromKnotFrontStraightFromBottomMap = {
            fromTopLeft: { fromY: 2472, fromX: 307 },
            fromTopRight: { fromY: 2471, fromX: 379 },
            fromBottomRight: { fromY: 2489, fromX: 379 },
            fromBottomLeft: { fromY: 2488, fromX: 309 }
        
            // keep
            // fromTopLeft: { fromY: 1204, fromX: 474 },
            // fromTopRight: { fromY: 1220, fromX: 493 },
            // fromBottomRight: { fromY: 1262, fromX: 447 },
            // fromBottomLeft: { fromY: 1248, fromX: 430 }
        }

        let fromKnotProfileStraightClosingFromBottomMap = {
            fromTopLeft: { fromY: 2428, fromX: 1034 },

            fromTopRight: { fromY: 2428, fromX: 1053 },
            
            fromBottomRight: { fromY: 2460, fromX: 1053 },
            
            fromBottomLeft: { fromY: 2460, fromX: 1035 }

            // keep original
        }

        let fromKnotFrontStraightClosingFromBottomMap = {
            fromTopLeft: { fromY: 2457, fromX: 1050 },

            fromTopRight: { fromY: 2476, fromX: 1050 },
            
            fromBottomRight: { fromY: 2477, fromX: 982 },
            
            fromBottomLeft: { fromY: 2459, fromX: 982 }

            // keep original
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

        let knotProfileStraightStackedFromStartingFromFlipped = {
            fromTopLeft: { fromY: 422, fromX: 739 },
            fromTopRight: { fromY: 411, fromX: 756 },
            fromBottomRight: { fromY: 427, fromX: 772 },
            fromBottomLeft: { fromY: 442, fromX: 758 }
            

            // keep
            // fromTopLeft: { fromY: 456, fromX: 698 },
            // fromTopRight: { fromY: 442, fromX: 712 },
            // fromBottomRight: { fromY: 463, fromX: 732 },
            // fromBottomLeft: { fromY: 471, fromX: 720 }
        }

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
        let constructFurtherKnot = constructKnotFromBottomMapFromStacking

        let furtherKnot = computeFurtherKnotFromFront(knotFrontStraightFromFlipped, knotFrontStraightStackedFromFlipped)
        constructFurtherKnot(furtherKnot)

        // keep
        // let anotherFurtherKnot = computeFurtherKnotFromFront(knotFrontStraightStackedFromFlipped, furtherKnot)
        // constructFurtherKnot(anotherFurtherKnot)

        let furtherProfileKnot = computeFurtherKnotFromFront(knotProfileStraightFromFlipped, knotProfileStraightStackedFromStartingFromFlipped)
        constructFurtherKnot(furtherProfileKnot)

        let anotherFurtherProfileKnot = computeFurtherKnotFromFront(knotProfileStraightStackedFromStartingFromFlipped, furtherProfileKnot)

        // constructFurtherKnot(anotherFurtherProfileKnot)


        let knotFrontStraightFromStackedFromFlipped = {
            fromTopLeft: { fromY: 531, fromX: 620 },
            fromTopRight: { fromY: 492, fromX: 670 /* keep */ + 4 },
            fromBottomRight: { fromY: 503, fromX: 676 /* keep */ + 4 },
            fromBottomLeft: { fromY: 544, fromX: 630 /* keep */ + 4 }

            // keep
        }
        // let furtherFrontKnot = computeFurtherKnotFromProfile(furtherKnot, knotFrontStraightFromStackedFromFlipped)
        // constructFurtherKnot(furtherFrontKnot)



        // constructKnotFromBottomMap(knotProfileStraightStackedFromFlipped)
        // constructKnotFromBottomMap(knotFrontStraightStackedFromFlipped)

        // keep
        // constructKnotFromBottomMap(knotProfileStraightFromFlipped)
        // constructKnotFromBottomMap(knotFrontStraightFromFlipped)

        constructKnotFromBottomMapFromStacking(knotProfileStraightFromFlipped)
        constructKnotFromBottomMapFromStacking(knotFrontStraightFromFlipped)



        constructKnotFromBottomMap(fromKnotProfileStraightClosingFromBottomMap)
        constructKnotFromBottomMap(fromKnotFrontStraightClosingFromBottomMap)

        constructKnotFromBottomMap(fromKnotFrontStraightFromBottomMap)
        constructKnotFromBottomMap(fromKnotProfileStraightFromBottomMap)

        // keep

        constructKnotFromBottomMap(knotFromBottomMap)

        constructStraightProfileClosingFromFlipped(knotStraightProfileClosingFromFlipped)
        constructStraightFrontClosingFromFlipped(knotStraightFrontClosingFromFlipped)

        // keep




        constructStraightProfileFromFlipped(knotStraightProfileFromFlipped)
        constructStraightFrontFromFlipped(knotStraightFrontFromFlipped)

        // keep

}
// keep
window['@pencil/draft-knot-from-stacking-bottom-map'] = {
    passThrough: passThrough['@pencil/draft-knot-from-stacking-bottom-map'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-knot-from-stacking-bottom-map']
}
// keep


})()
// don't stay here
// use #vertical-bounce-handler