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
    passThroughFromBottom['@pencil/draft-knot-from-character-from-bottom-map'] = {}
    // keep

    passThrough['@pencil/draft-knot-from-character-from-bottom-map'] = function (spawnedPointerBelongings, passThroughKnot) {

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
    let fromKnotDistanceMiddle = [
        { fromY: 870, fromX: 674 },
        { fromY: 538, fromX: 423 },
        { fromY: 518, fromX: 448 },
        { fromY: 849, fromX: 701 }            
    ]

    let fromKnotDistanceMelee = [
        { fromY: 627, fromX: 724 },
        { fromY: 517, fromX: 641 },
        { fromY: 513, fromX: 653 },
        { fromY: 620, fromX: 740 }
    ]

    let fromKnotLocator = [
        { fromY: 404, fromX: 906 },
        { fromY: 401, fromX: 900 },
        { fromY: 396, fromX: 906 },
        { fromY: 404, fromX: 912 }
    ]

    let computeReferenceGraphFromFlipped = function() {

    }

    let computeKnotMetricFromFlippedFromBottomMap = function() {
        // keep

        // let newBottomMap = []

        // // keep
        // let referenceGraph

        // // keep knotComputedFromMetric

        // let [y0, x0]

        // let [yClosing, xClosing]

        // // keep
        // let profile

        // let knotWi

        // // keep move fromFront, use fromBouncedY, fromBouncedX
        // let fromBouncedY
        // let fromBouncedX

        // // keep profile

        // // keep front
        // let [y0FromOriginal, x0FromOriginal]
        // let [y0FromBottomRightFromOriginal, x0FromBottomRightFromOriginal]
        // let [y0FromTopRightFromOriginal, x0FromTopRightFromOriginal]
        // let [y0FromTopLeftFromOriginal, x0FromTopLeftFromOriginal]

        // let [y0FromFurther, x0FromFurther]
        // let [y0FromBottomRightFromFurther, x0FromBottomRightFromFurther]
        // let [y0FromTopRightFromFurther, x0FromTopRightFromFurther]
        // let [y0FromTopLeftFromFurther, x0FromTopLeftFromFurther]

        // // keep move flipped profile
        // // keep move flipped front

        // let fromFrontFromFlipped

        // // keep
        // let fromProfileFromFlipped

        // construct referenceGraphFromX, use fromXFromFurther
        // construct referenceGraphFromY, use fromYFromFurther

        // construct newBottomMapFromFlipped
    }

    // keep knot locator
    // keep distance middle
    // keep distance melee


    // keep
    let fromKnotFrontStraightClosingFromTopRightFromFlipped = [
        { fromY: 850, fromX: 699 },
        { fromY: 823, fromX: 682 },
        { fromY: 814, fromX: 693 },
        { fromY: 839, fromX: 712 }
    ]
    let fromKnotProfileStraightClosingFromTopRightFromFlipped = [
        { fromY: 870, fromX: 673 },
        { fromY: 853, fromX: 662 },
        { fromY: 835, fromX: 689 },
        { fromY: 851, fromX: 700 }
    ]

    // keep
    let fromKnotProfileStraightClosingFromBottomRightFromFlipped = [
        { fromY: 273, fromX: 820 },
        { fromY: 256, fromX: 806 },
        { fromY: 239, fromX: 835 },
        { fromY: 254, fromX: 844 }
    ]
    let fromKnotFrontStraightClosingFromBottomRightFromFlipped = [
        { fromY: 250, fromX: 843 },
        { fromY: 224, fromX: 823 },
        { fromY: 218, fromX: 839 },
        { fromY: 242, fromX: 858 }
    ]


    let fromKnotProfileStraightFromFlippedFromOriginal = {
        fromTopLeft: { fromY: 585, fromX: 1043 },
        fromTopRight: { fromY: 573, fromX: 1033 },
        fromBottomRight: { fromY: 551, fromX: 1059 },
        fromBottomLeft: { fromY: 565, fromX: 1070 }
    }

    let fromKnotFrontStraightFromFlippedFromOriginal = {
        fromTopLeft: { fromY: 565, fromX: 1070 },
        fromTopRight: { fromY: 541, fromX: 1053 },
        fromBottomRight: { fromY: 533, fromX: 1064 },
        fromBottomLeft: { fromY: 554, fromX: 1082 }
    }


    // construct from knotMetric
    // keep

    // keep closingFromTopLeftFromFlipped
    // keep closingFromBottomRightFromFlipped

    // keep fromKnotProfileStraightFromFlipped
    // keep fromKnotFrontStraightFromFlipped

    // construct from flipped
    // keep

    // keep orginal

    let fromKnotProfileStraightFromFlipped = {
        fromTopLeft: { fromY: 662, fromX: 748 },
        fromTopRight: { fromY: 652, fromX: 762 },
        fromBottomRight: { fromY: 679, fromX: 786 },
        fromBottomLeft: { fromY: 691, fromX: 771 }
    }

    let fromKnotFrontStraightFromFlipped = {
        fromTopLeft: { fromY: 667, fromX: 703 },
        fromTopRight: { fromY: 634, fromX: 747 },
        fromBottomRight: { fromY: 649, fromX: 763 },
        fromBottomLeft: { fromY: 681, fromX: 720 }
    }



    let fromBottomMapFromBottom, fromBottomMapFromLeft

    let fromKnotProfileStraightFromBottomMap = {
        fromTopLeft: { fromY: 1220, fromX: 402 },
        fromTopRight: { fromY: 1214, fromX: 416 },
        fromBottomRight: { fromY: 1238, fromX: 437 },
        fromBottomLeft: { fromY: 1245, fromX: 428 }
    }

    let fromKnotFrontStraightFromBottomMap = {
        fromTopLeft: { fromY: 1204, fromX: 474 },
        fromTopRight: { fromY: 1220, fromX: 493 },
        fromBottomRight: { fromY: 1262, fromX: 447 },
        fromBottomLeft: { fromY: 1248, fromX: 430 }
    }




    let knotBottomMapFlipped = {
        /* keep 700px */

        /* keep 700px */
        fromTopLeft: { fromY: 1053 /* keep */, fromX: 250 },
        fromTopRight: { fromY: 606 /* keep */, fromX: 762 },
        
        fromBottomRight: { fromY: 811 /* keep */, fromX: 968 },
        fromBottomLeft: { fromY: 1281 /* keep */, fromX: 442 }
    }

    let knotBottomMapFromCharacterFlipped = {
        /* keep 700px */
        /* keep 700px */

        /* keep  700 */
        fromTopLeft: { fromY: 622 /* keep */ + 700 /* keep */, fromX: 547 },
        fromTopRight: { fromY: 711 /* keep */ + 700 /* keep */, fromX: 843 },
        fromBottomRight: { fromY: 1273 /* keep */ + 700 /* keep */, fromX: 678 },
        fromBottomLeft: { fromY: 1184 /* keep */ + 700 /* keep */, fromX: 392 }
    }

    let knotViewportFromCharacter = {
        /* keep 700px */
        /* keep 700px */
        /* keep 700px */
        fromTopLeft: { fromY: 627 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 530 },
        fromTopRight: { fromY: 687 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 865 },

        fromBottomRight: { fromY: 1099 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 776 },
        fromBottomLeft: { fromY: 1039 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 449 }
    }
    let knotFromBottomMap = {
        /* keep from bottom map stack\ing */
        fromTopLeft: { fromY: 781 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 318 },
        fromTopRight: { fromY: 425 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 800 },
        fromBottomRight: { fromY: 661 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 1011 },
        fromBottomLeft: { fromY: 1016 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 512 }
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
    let constructKnotViewportFromCharacter = constructKnotFromBottomMap
    let constructKnotBottomMapFromCharacterFlipped = constructKnotFromBottomMap
    let constructKnotBottomMapFlipped = constructKnotFromBottomMap


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


    let knotStraightFromBottomMap = {
        fromTopLeft: { fromY: 660 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 336 },
        fromTopRight: { fromY: 661 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 1052 },
        fromBottomRight: { fromY: 969 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 1044 },
        fromBottomLeft: { fromY: 978 /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 /* keep */, fromX: 334 }
    }



    let constructBottomMapFlipped = function(fromKnotProfileStraightFromFlipped, fromKnotFrontStraightFromFlipped, /* keep knotComputedFromMetric */ knotBottomMapFlipped,  fromKnotFrontStraight, knotStraightFromBottomMap, fromKnotFrontStraighClosingtFromFlipped, pointerBelongingsFromFurtherKnotFromFrontStraightAbove) {
        
        let originalKnotProfileStraightFromFlipped = fromKnotProfileStraightFromFlipped
        let originalKnotFrontStraightFromFlipped = fromKnotFrontStraightFromFlipped

        // keep
        // follow #draf-knot-bottom-map
        // use #descending-from-the-sun
        let profileFromFrontStraight = fromKnotFrontStraight.fromTopLeft.fromY - fromKnotFrontStraight.fromBottomLeft.fromY
        // use #descending-from-the-sun
        let knotWiFromFrontStraight = fromKnotFrontStraight.fromBottomRight.fromX - fromKnotFrontStraight.fromBottomLeft.fromX


        // keep original
        // use #descending-from-the-sun
        let knotWiFromFrontFlipped = fromKnotFrontStraightFromFlipped.fromBottomRight.fromX - fromKnotFrontStraightFromFlipped.fromBottomLeft.fromX 

        // keep original
        // use #descending-from-the-sun
        let profileFromFrontFlipped = fromKnotFrontStraightFromFlipped.fromBottomLeft.fromY - fromKnotFrontStraightFromFlipped.fromTopLeft.fromY

        let constructKnotStraight = function() {
            let [y0, x0] = [fromKnotFrontStraightFromFlipped.fromBottomLeft.fromY, fromKnotFrontStraightFromFlipped.fromBottomLeft.fromX]
            let [yFromBottomRight, xFromBottomRight] = [fromKnotFrontStraightFromFlipped.fromBottomRight.fromY, fromKnotFrontStraightFromFlipped.fromBottomRight.fromX]
            let [yFromTopRight, xFromTopRight] = [fromKnotFrontStraightFromFlipped.fromTopRight.fromY, fromKnotFrontStraightFromFlipped.fromTopRight.fromX]
            let [yFromTopLeft, xFromTopLeft] = [fromKnotFrontStraightFromFlipped.fromTopLeft.fromY, fromKnotFrontStraightFromFlipped.fromTopLeft.fromX]

            ctx.beginPath()
            // keep
            fromCtx(ctx).moveTo(y0, x0)
            fromCtx(ctx).lineTo(yFromBottomRight, xFromBottomRight)

            // keep
            fromCtx(ctx).moveTo(yFromBottomRight, xFromBottomRight)
            fromCtx(ctx).lineTo(yFromTopRight, xFromTopRight)

            // keep
            fromCtx(ctx).moveTo(yFromTopRight, xFromTopRight)
            fromCtx(ctx).lineTo(yFromTopLeft, xFromTopLeft)

            // keep
            fromCtx(ctx).moveTo(yFromTopLeft, xFromTopLeft)
            fromCtx(ctx).lineTo(y0, x0)

            ctx.stroke()
        }
        // keep


        let furtherKnot = constructpointerBelongingsFromFurtherKnotFromFrontStraight(fromKnotFrontStraight)
        furtherKnot.compute()

        let pointerBelongingsFromFurtherKnot = furtherKnot.getPointerBelongings()

        // keep
        // use #descending-from-the-sun
        let knotWiFromKnotStraightFromBottomMap = knotStraightFromBottomMap.fromBottomRight.fromX - knotStraightFromBottomMap.fromBottomLeft.fromX
        // use #descending-from-the-sun
        let knotProfileFromKnotStraightFromBottomMap = knotStraightFromBottomMap.fromTopLeft.fromY - knotStraightFromBottomMap.fromBottomLeft.fromY

        // keep
        let knotYStartingFrom
        let knotYClosing

        // keep

        // keep
        // keep from original
        // let [tryFromy0, tryFromx0] = [fromKnotFrontStraight.fromBottomLeft.fromY / knotProfileFromKnotStraightFromBottomMap, fromKnotFrontStraight.fromBottomLeft.fromY / knotWiFromKnotStraightFromBottomMap]
        // let [tryFromYFromBottomRight, tryFromXFromBottomRight] = [fromKnotFrontStraight.fromBottomRight.fromY / knotProfileFromKnotStraightFromBottomMap, fromKnotFrontStraight.fromBottomRight.fromY / knotWiFromKnotStraightFromBottomMap]
        // let [tryFromYFromTopRight, tryFromXFromTopRight] = [fromKnotFrontStraight.fromTopRight.fromY / knotProfileFromKnotStraightFromBottomMap, fromKnotFrontStraight.fromTopRight.fromY / knotWiFromKnotStraightFromBottomMap]
        // let [tryFromYFromTopLeft, tryFromXFromTopLeft] = [fromKnotFrontStraight.fromTopLeft.fromY / knotProfileFromKnotStraightFromBottomMap, fromKnotFrontStraight.fromTopLeft.fromY / knotWiFromKnotStraightFromBottomMap]

        // keep from computed
        // keep further from computed
        let [tryFromy0, tryFromx0] = [pointerBelongingsFromFurtherKnot.fromBottomLeft.fromY / knotProfileFromKnotStraightFromBottomMap, pointerBelongingsFromFurtherKnot.fromBottomLeft.fromY / knotWiFromKnotStraightFromBottomMap]
        let [tryFromYFromBottomRight, tryFromXFromBottomRight] = [pointerBelongingsFromFurtherKnot.fromBottomRight.fromY / knotProfileFromKnotStraightFromBottomMap, pointerBelongingsFromFurtherKnot.fromBottomRight.fromY / knotWiFromKnotStraightFromBottomMap]
        let [tryFromYFromTopRight, tryFromXFromTopRight] = [pointerBelongingsFromFurtherKnot.fromTopRight.fromY / knotProfileFromKnotStraightFromBottomMap, pointerBelongingsFromFurtherKnot.fromTopRight.fromY / knotWiFromKnotStraightFromBottomMap]
        let [tryFromYFromTopLeft, tryFromXFromTopLeft] = [pointerBelongingsFromFurtherKnot.fromTopLeft.fromY / knotProfileFromKnotStraightFromBottomMap, pointerBelongingsFromFurtherKnot.fromTopLeft.fromY / knotWiFromKnotStraightFromBottomMap]

        // keep
        // let [y0, x0] = [(fromKnotFrontStraightFromFlipped.fromTopLeft.fromY - fromKnotFrontStraighClosingtFromFlipped.fromTopRight.fromY) * tryFromy0 /* keep */, fromKnotFrontStraightFromFlipped.fromTopLeft.fromX /* keep */ ]
        // let [yFromBottomRight, xFromBottomRight] = [fromKnotFrontStraightFromFlipped.fromBottomLeft.fromY, fromKnotFrontStraightFromFlipped.fromTopLeft.fromX]
        // let [yFromTopRight, xFromTopRight] = [fromKnotFrontStraightFromFlipped.fromTopLeft.fromY, fromKnotFrontStraightFromFlipped.fromTopLeft.fromX]
        // let [yFromTopLeft, xFromTopLeft] = [fromKnotFrontStraightFromFlipped.fromTopLeft.fromY /* keep */ + (knotBottomMapFlipped.fromBottomLeft.fromY - knotBottomMapFlipped.fromTopLeft.fromY) * tryFromYFromTopLeft /* keep */ - (knotBottomMapFlipped.fromBottomRight.fromX - knotBottomMapFlipped.fromBottomLeft.fromX) * tryFromx0]

        // keep
        // keep !

        let constructWorkaround = function() {
            let [yFromBottomRight, xFromBottomRight] = [fromKnotFrontStraightFromFlipped.fromBottomLeft.fromY, fromKnotFrontStraightFromFlipped.fromBottomLeft.fromX]
            let [yFromTopRight, xFromTopRight] = [fromKnotFrontStraightFromFlipped.fromTopLeft.fromY, fromKnotFrontStraightFromFlipped.fromTopLeft.fromX]
            

            let [y0, x0] = [fromKnotFrontStraighClosingtFromFlipped.fromBottomRight.fromY, 
                fromKnotFrontStraighClosingtFromFlipped.fromBottomRight.fromX]
            let [yFromTopLeft, xFromTopLeft] = [fromKnotFrontStraighClosingtFromFlipped.fromTopRight.fromY, fromKnotFrontStraighClosingtFromFlipped.fromTopRight.fromX]


            ctx.beginPath()
            // keep
            fromCtx(ctx).moveTo(y0, x0)
            fromCtx(ctx).lineTo(yFromBottomRight, xFromBottomRight)

            fromCtx(ctx).moveTo(yFromBottomRight, xFromBottomRight)
            fromCtx(ctx).lineTo(yFromTopRight, xFromTopRight)

            fromCtx(ctx).moveTo(yFromTopRight, xFromTopRight)
            fromCtx(ctx).lineTo(yFromTopLeft, xFromTopLeft)

            fromCtx(ctx).moveTo(yFromTopLeft, xFromTopLeft)
            fromCtx(ctx).lineTo(y0, x0)

            ctx.stroke()

        }
        // constructWorkaround()

        // keep
    }
    // keep
    let constructKnotStraightFromBottomMap = constructKnotFromBottomMap

    let constructPointerBelongingsFromFurtherKnotFromFrontStraightUp = function(fromKnotFrontStraight) {
        // use #descending-from-the-sun
        let profile = fromKnotFrontStraight.fromBottomLeft.fromY - fromKnotFrontStraight.fromBottomRight.fromY
        let knotWi = fromKnotFrontStraight.fromBottomRight.fromX - fromKnotFrontStraight.fromBottomLeft.fromX

        // keep
        let [y0, x0] = [fromKnotFrontStraight.fromTopLeft.fromY, fromKnotFrontStraight.fromBottomRight.fromX]
        let [yFromBottomRight, xFromBottomRight] = [fromKnotFrontStraight.fromTopLeft.fromY, fromKnotFrontStraight.fromBottomRight.fromX + knotWi]
        let [yFromTopRight, xFromTopRight] = [fromKnotFrontStraight.fromTopLeft.fromY + profile, fromKnotFrontStraight.fromBottomRight.fromX + knotWi]
        let [yFromTopLeft, xFromTopLeft] = [fromKnotFrontStraight.fromTopLeft.fromY + profile, fromKnotFrontStraight.fromBottomRight.fromX]

        ctx.beginPath()
        // keep
        fromCtx(ctx).moveTo(y0, x0)
        fromCtx(ctx).lineTo(yFromBottomRight, xFromBottomRight)

        // keep
        fromCtx(ctx).moveTo(yFromBottomRight, xFromBottomRight)
        fromCtx(ctx).lineTo(yFromTopRight, xFromTopRight)

        // // keep
        fromCtx(ctx).moveTo(yFromTopRight, xFromTopRight)
        fromCtx(ctx).lineTo(yFromTopLeft, xFromTopLeft)

        // keep
        fromCtx(ctx).moveTo(yFromTopLeft, xFromTopLeft)
        fromCtx(ctx).lineTo(y0, x0)

        ctx.stroke()

        let pointerBelongings

        return {
            draw: function() {

            },
            getPointerBelongings: function() {
                return pointerBelongings
            },
            compute: function() {
                pointerBelongings = {
                    fromTopLeft: {fromY: yFromTopLeft, fromX: xFromTopLeft},
                    fromTopRight: {fromY: yFromTopRight, fromX: xFromTopRight},
                    fromBottomRight: {fromY: yFromBottomRight, fromX: xFromBottomRight},
                    fromBottomLeft: {fromY: y0, fromX: x0}
                }
            }
        }
    }


    let constructpointerBelongingsFromFurtherKnotFromFrontStraight = function(fromKnotFrontStraight) {
        // use #descending-from-the-sun
        let profile = fromKnotFrontStraight.fromBottomLeft.fromY - fromKnotFrontStraight.fromBottomRight.fromY
        let knotWi = fromKnotFrontStraight.fromBottomRight.fromX - fromKnotFrontStraight.fromBottomLeft.fromX

        // keep
        let [y0, x0] = [fromKnotFrontStraight.fromBottomLeft.fromY, fromKnotFrontStraight.fromBottomRight.fromX]
        let [yFromBottomRight, xFromBottomRight] = [fromKnotFrontStraight.fromBottomLeft.fromY, fromKnotFrontStraight.fromBottomRight.fromX + knotWi]
        let [yFromTopRight, xFromTopRight] = [fromKnotFrontStraight.fromTopLeft.fromY, fromKnotFrontStraight.fromBottomRight.fromX + knotWi]
        let [yFromTopLeft, xFromTopLeft] = [fromKnotFrontStraight.fromTopLeft.fromY, fromKnotFrontStraight.fromBottomRight.fromX]

        ctx.beginPath()
        // keep
        fromCtx(ctx).moveTo(y0, x0)
        fromCtx(ctx).lineTo(yFromBottomRight, xFromBottomRight)

        // keep
        fromCtx(ctx).moveTo(yFromBottomRight, xFromBottomRight)
        fromCtx(ctx).lineTo(yFromTopRight, xFromTopRight)

        // // keep
        fromCtx(ctx).moveTo(yFromTopRight, xFromTopRight)
        fromCtx(ctx).lineTo(yFromTopLeft, xFromTopLeft)

        // keep
        fromCtx(ctx).moveTo(yFromTopLeft, xFromTopLeft)
        fromCtx(ctx).lineTo(y0, x0)

        ctx.stroke()

        let pointerBelongings

        return {
            draw: function() {

            },
            getPointerBelongings: function() {
                return pointerBelongings
            },
            compute: function() {
                pointerBelongings = {
                    fromTopLeft: {fromY: yFromTopLeft, fromX: xFromTopLeft},
                    fromTopRight: {fromY: yFromTopRight, fromX: xFromTopRight},
                    fromBottomRight: {fromY: yFromBottomRight, fromX: xFromBottomRight},
                    fromBottomLeft: {fromY: y0, fromX: x0}
                }
            }
        }
    }

    // keep
    let pointerBelongingsFromFurtherKnotFromFrontStraight = constructpointerBelongingsFromFurtherKnotFromFrontStraight(fromKnotFrontStraight)
    pointerBelongingsFromFurtherKnotFromFrontStraight.compute()
    let pointerBelongingsFromFurhterKnotFromFrontStraight = pointerBelongingsFromFurtherKnotFromFrontStraight.getPointerBelongings()


    let profileFrompointerBelongingsFromFurtherKnot
    let knotWiFrompointerBelongingsFromFurtherKnot = pointerBelongingsFromFurhterKnotFromFrontStraight.fromBottomRight.fromX - pointerBelongingsFromFurhterKnotFromFrontStraight.fromBottomLeft.fromX


    let pointerBelongingsFromFurtherKnotAnotherFromFrontStraight = constructpointerBelongingsFromFurtherKnotFromFrontStraight(fromKnotFrontStraight)
    pointerBelongingsFromFurtherKnotAnotherFromFrontStraight.compute()
    let pointerBelongingsFromFurhterKnotAnotherFromFrontStraight = pointerBelongingsFromFurtherKnotFromFrontStraight.getPointerBelongings()

    let pointerBelongingsFromFurtherKnotFromFrontStraightAbove = constructPointerBelongingsFromFurtherKnotFromFrontStraightUp(fromKnotFrontStraight)
    pointerBelongingsFromFurtherKnotFromFrontStraightAbove.compute()
    let pointerBelongingsFromFurhterKnotFromFrontStraightAbove = pointerBelongingsFromFurtherKnotFromFrontStraight.getPointerBelongings()


    // keep
    // use #descending-from-the-sun
    let knotWiFromKnotStraightFromBottomMap = knotStraightFromBottomMap.fromBottomRight.fromX - knotStraightFromBottomMap.fromBottomLeft.fromX
    // knotStraightFromBottomMap.fromBottomLeft, knotStraightFromBottomMap.fromBottomRight

    // keep
    // use #descending-from-the-sun
    let knotWiFrompointerBelongingsFromFurtherKnotAnother = knotStraightFromBottomMap.fromBottomRight.fromX - pointerBelongingsFromFurhterKnotAnotherFromFrontStraight.fromBottomLeft.fromX


    let tryFrompointerBelongingsFromFurtherKnot = knotWiFrompointerBelongingsFromFurtherKnot / knotWiFromKnotStraightFromBottomMap
    let tryFromAntoherpointerBelongingsFromFurtherKnot = knotWiFrompointerBelongingsFromFurtherKnotAnother / knotWiFromKnotStraightFromBottomMap

    let fromKnotFrontStraighClosingtFromFlipped = {


        fromTopLeft: { fromY: 1057, fromX: 273 },

        fromTopRight: { fromY: 1013, fromX: 321 },
        fromBottomRight: { fromY: 1028, fromX: 334 },


        fromBottomLeft: { fromY: 1071, fromX: 282 },
    }

    constructBottomMapFlipped(fromKnotProfileStraightFromFlipped, fromKnotFrontStraightFromFlipped, knotBottomMapFlipped, fromKnotFrontStraight, knotStraightFromBottomMap, fromKnotFrontStraighClosingtFromFlipped, pointerBelongingsFromFurtherKnotFromFrontStraightAbove)

    
    constructKnotStraightFromBottomMap(fromKnotFrontStraighClosingtFromFlipped)
    constructKnotStraightFromBottomMap(fromKnotProfileStraight)

    constructKnotStraightFromBottomMap(fromKnotFrontStraight)
    constructKnotStraightFromBottomMap(knotStraightFromBottomMap)


    // keep
    constructKnotFromBottomMap(fromKnotProfileStraightFromFlipped)
    constructKnotFromBottomMap(fromKnotFrontStraightFromFlipped)

    
    
    constructKnotFromBottomMap(fromKnotProfileStraightFromBottomMap)
    constructKnotFromBottomMap(fromKnotFrontStraightFromBottomMap)

    constructKnotBottomMapFlipped(knotBottomMapFlipped)
    constructKnotBottomMapFromCharacterFlipped(knotBottomMapFromCharacterFlipped)
    constructKnotViewportFromCharacter(knotViewportFromCharacter)
    constructKnotFromBottomMap(knotFromBottomMap)

    // keep

}
// keep
window['@pencil/draft-knot-from-character-from-bottom-map'] = {
    passThrough: passThrough['@pencil/draft-knot-from-character-from-bottom-map'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-knot-from-character-from-bottom-map']
}
// keep


})()
// don't stay here
// use #vertical-bounce-handler