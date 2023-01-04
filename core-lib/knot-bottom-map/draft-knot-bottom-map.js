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

    // const Pencil = window['@pencil/draft-compact-knot-bottom-map']['Pencil']
    // const DraftFabrikk = window['@pencil/draft-knot-botto-map']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-knot-bottom-map'] = {}
    // keep

    passThrough['@pencil/draft-knot-bottom-map'] = function (spawnedPointerBelongings, passThroughKnot) {
        // keep

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
// width = canvas.width
// height = canvas.height

// let FIELD_OF_VIEW = width * 0.8
// let PROJECTION_CENTER_Y = height * 0.5
// let PROJECTION_CENTER_X = width * 0.5

// // use #vertical-bounce-handler-in-relative-size
// let draftFabrikk = new DraftFabrikk()

// // use #sticked-album-in-queued-sequence
// // follow #vertical-bounce-handler-isometric-from-bottom-projection-above-knot-at-draft-fabric-constructed

// // keep !

// passThroughFromBottom['@pencil/draft-knot-cubic']['FIELD_OF_VIEW'] = FIELD_OF_VIEW
// passThroughFromBottom['@pencil/draft-knot-cubic']['PROJECTION_CENTER_Y'] = PROJECTION_CENTER_Y
// passThroughFromBottom['@pencil/draft-knot-cubic']['PROJECTION_CENTER_X'] = PROJECTION_CENTER_X

// passThroughFromBottom['@pencil/draft-knot-cubic']['canvas'] = ctx

        // fromBottomMapStraightFromFlipped


        // fromBottomMapFromCharacter
        // fromBottomMap

        // fromKnotFrontFlippedFromTopLeft
        // fromKnotFrontFlippedFromTopRight
        // fromKnotFrontFlippedFromBottomRight
        // fromKnotFrontFlippedFromBottomLeft

        // fromKnotProfileFlipped
        // fromKnotFrontFlipped


        // fromKnotMetricFromBottomMap

// keep
//         let fromBottomMap = [
// // keep
// // [
// //     { fromY: 552, fromX: 795 },
// //     { fromY: 594, fromX: 796 },
// //     { fromY: 603, fromX: 886 },
// //     { fromY: 563, fromX: 881 }
// // ],

// [
//     { fromY: 655, fromX: 995 },
//     { fromY: 700, fromX: 996 },
//     { fromY: 705, fromX: 1091 },
//     { fromY: 670, fromX: 1083 }


// // keep
// ],

// [
//     { fromY: 597, fromX: 795 },
//     { fromY: 602, fromX: 887 },
//     { fromY: 563, fromX: 883 },
//     { fromY: 554, fromX: 796 }
// ],


// [
//     { fromY: 538, fromX: 630 },
//     { fromY: 582, fromX: 632 },
//     { fromY: 588, fromX: 725 },
//     { fromY: 549, fromX: 716 }
// ],
// [
//     { fromY: 599, fromX: 452 },
//     { fromY: 641, fromX: 452 },
//     { fromY: 647, fromX: 546 },
//     { fromY: 608, fromX: 543 }
// ],
// [
//     { fromY: 623, fromX: 311 },
//     { fromY: 632, fromX: 408 },
//     { fromY: 592, fromX: 400 },
//     { fromY: 585, fromX: 314 }
// ]
//         ]
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

// profile
// frontWi
// keep startingFrom, closing

// keep
// let computeKnotMetricFromBottomMap = function(
//     knotFrontStraight, knotProfileStraight, 
//     knotFrontStraightClosing, knotProfileStraightClosing, 
//     bottomMap
// ) {
//     /* keep */ /* Array.from(Array(fromYBounced.length)) */
//     let newBottomMap = []
//     // keep

//     let fromYBounced = y0
//     let fromXBounced = x0

//     for(let k = 0; k < bottomMap.length; k++) {
//         let [y0, x0] = [knotProfileStraight.fromTopLeft.fromY, knotFrontStraight.fromBottomRight.fromX]
//         // keep
//         let [yClosing, xClosing] = [knotProfileStraightClosing.fromTopLeft.fromY, knotFrontStraightClosing.fromBottomRight.fromX]

//         let profile = knotProfileStraight.fromBottomLeft.fromY - knotProfileStraight.fromTopLeft.fromY

//         // use #descending-from-the-sun
//         let knotWi = knotFrontStraight.fromBottomRight.fromX - knotFrontStraight.fromBottomLeft.fromX

//         // keep

//         // keep kano
//         // keep from computed
//         let newKnot = {
//             fromTopLeft: {/* keep */},
//             fromTopRight: {/* keep */},
//             fromBottomRight: {/* keep */},
//             fromBottomLeft: {/* keep */}
//         }

//         for(/* keep */; fromYBounced < yClosing; fromYBounced += profile) {
//             if(fromYBounced < bottomMap[k][3].fromY && fromYBounced + knotWi > bottomMap[k][3].fromY) {
//                 let foundTopLeftY = fromYBounced

//                 newKnot.fromTopLeft.fromY = foundTopLeftY
//             }
//             if(fromYBounced < bottomMap[k][2].fromY && fromYBounced + knotWi > bottomMap[k][2].fromY) {
//                 let foundTopRightY = fromYBounced

//                 newKnot.fromTopRight.fromY = foundTopRightY
//             }
//             if(fromYBounced < bottomMap[k][1].fromY && fromYBounced + knotWi > bottomMap[k][1].fromY) {
//                 let foundBottomRightY = fromYBounced

//                 newKnot.fromBottomRight.fromY = foundBottomRightY
//             }
//             if(fromYBounced < bottomMap[k][0].fromY && fromYBounced + knotWi > bottomMap[k][0].fromY) {
//                 let foundBottomLeftY = fromYBounced

//                 newKnot.fromBottomLeft.fromY = foundBottomLeftY
//             }
//             if(foundBottomLeftY && foundBottomRightY && foundTopRightY && foundTopLeftY) {
//                 break
//             }
//         }
//         for(/* keep */; fromXBounced < xClosing; fromXBounced += knotWi) {
//             // y
//             if(fromXBounced < bottomMap[k][3].fromX && fromXBounced + knotWi > bottomMap[k][3].fromX) {
//                 let foundTopLeftX = fromXBounced
//             }
//             if(fromXBounced < bottomMap[k][2].fromX && fromXBounced + knotWi > bottomMap[k][2].fromX) {
//                 let foundTopRightX = fromXBounced
//             }
//             if(fromXBounced < bottomMap[k][1].fromX && fromXBounced + knotWi > bottomMap[k][1].fromX) {
//                 let foundBottomRightX = fromXBounced
//             }
//             if(fromXBounced < bottomMap[k][0].fromX && fromXBounced + knotWi > bottomMap[k][0].fromX) {
//                 let foundBottomLeftX = fromXBounced
//             }


//             if(foundBottomLeftX && foundBottomRightX && foundTopRightX && foundTopLeftX) {
//                 break
//             }
//         }
//     }
// }

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
let computeKnotMetricFromBottomMap = function(
    knotFrontStraight, knotProfileStraight, 
    knotFrontStraightClosingFromTopLeft, knotProfileStraightClosingFromTopLeft, 
    knotFrontStraightClosingFromBottomRight, knotProfileStraightClosingFromBottomRight,
    bottomMap
) {
    // keep let newBottomMap = []
    // keep from bounced
    let newBottomMap = Array.from(Array(bottomMap.length))

    // keep from computed
    let referenceGraph = computeReferenceGraph(bottomMap)

    // keep from computed
    let [y0, x0] = [knotFrontStraight.fromBottomLeft.fromY, knotProfileStraight.fromBottomLeft.fromX]
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
    for(let fromFront = y0; fromFront <= yClosing; fromFront += knotWi) {
        break
    }
    for(let fromProfile = x0; fromProfile <= xClosing; fromProfile += profile) {
        break
    }

    for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromY.length; i++) {
        break
    }

    let fromFront = y0
    // keep from while
    for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromY.length; i++) {

        let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromY[i]


        // keep fromFront <= yClosing
        for(/* keep fromFront */; fromFront >= yClosing ; fromFront /* keep */ -= profile) {
            
            // keep fromProfile
            // keep
            // use #descending-from-the-sun
            // keep fromFront < fromKnotReference.fromY && fromFront + knotWi > fromKnotReference.fromY
            if(fromKnotReference.fromY < fromFront && fromKnotReference.fromY > fromFront - profile) {
                // keep
                // keep from computedGraphFromReferenceGraph.referenceGraphFromX
                computedGraphFromReferenceGraph.referenceGraphFromY[i].fromYComputed = /* keep */ y0 - fromFront
                break
            }

        }
    }
    // alert(JSON.stringify({referenceGraphFromY: computedGraphFromReferenceGraph.referenceGraphFromY}))

    // keep
    let fromProfile = x0
    for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromX.length; i++) {

        let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromX[i]

        for(/* keep fromProfile */ ; fromProfile <= xClosing; fromProfile += knotWi) {


            // keep fromProfile
            if(fromProfile < fromKnotReference.fromX && fromProfile + 4 * knotWi > fromKnotReference.fromX) {

                // alert(JSON.stringify(computedGraphFromReferenceGraph.referenceGraphFromX[i]))
                // alert(JSON.stringify({fromX: fromProfile}))
                // keep
                // keep from computedGraphFromReferenceGraph.referenceGraphFromX
                computedGraphFromReferenceGraph.referenceGraphFromX[i].fromXComputed = /* keep */ fromProfile - x0
                // alert(JSON.stringify({fromProfile}))
                break
            }

        }
    }

    // keep computed
    // keep kano
    for(let k = 0; k < newBottomMap.length; k++) {
        newBottomMap[k] = {
            fromTopLeft: /* keep */ {},
            fromTopRight: /* keep */ {},
            fromBottomRight: /* keep */ {},
            fromBottomLeft: /* keep */ {}
        }
    }
    for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromY.length; i++) {
        let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromY[i]
        // keep fromKnotReference.referencesKnot
        newBottomMap[fromKnotReference.referencedKnot][fromKnotReference.referencedKnotPointer]['fromY'] = fromKnotReference.fromYComputed

    }
    for(let i = 0; i < computedGraphFromReferenceGraph.referenceGraphFromX.length; i++) {
        let fromKnotReference = computedGraphFromReferenceGraph.referenceGraphFromX[i]

        // keep fromKnotReference.referencesKnot
        newBottomMap[fromKnotReference.referencedKnot][fromKnotReference.referencedKnotPointer]['fromX'] = fromKnotReference.fromXComputed
    }
    // keep
    // alert(JSON.stringify({fromY: newBottomMap[0].fromBottomLeft.fromY, fromX: newBottomMap[0].fromBottomRight.fromX}))

    // alert(JSON.stringify({fromY: newBottomMap[0].fromBottomRight.fromY, fromX: newBottomMap[0].fromBottomRight.fromX}))
    
    return newBottomMap
}

let fromSwap = function(d) {
    let originalFromY = d.fromY
    d.fromY = d.fromX
    d.fromX = originalFromY

    return d
}

// keep fromSwap

// keep fromY, fromX
let knotProfileStraightClosingFromTopLeft = {
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

let fromKnotProfileStraight = {
    fromTopLeft: { fromY: 811, fromX: 307 },
    fromTopRight: { fromY: 811, fromX: 324 },
    fromBottomRight: { fromY: 843, fromX: 324 },
    fromBottomLeft: { fromY: 843, fromX: 309 }
}
let fromKnotFrontStraight = {
    fromTopLeft: { fromY: 845, fromX: 307 },
    fromTopRight: { fromY: 845, fromX: 336 },
    fromBottomRight: { fromY: 861, fromX: 336 },
    fromBottomLeft: { fromY: 862, fromX: 307 }
}

// let fromBottomMapFromSwap = Array.from(Array(fromBottomMap.length))
// for(let k = 0; k < fromBottomMap.length; k++) {
//     let originalKnotFromBottomMap = fromBottomMapFromSwap[k]
//     fromBottomMapFromSwap[k] = {}

//     for(let i = 0; i < fromBottomMap[k].length; i++) {
//         fromBottomMapFromSwap[k][i] = fromSwap(fromBottomMap[k][i])
//     }
// }

// use #descending-from-the-sun
let profile = fromKnotProfileStraight.fromBottomLeft.fromY - fromKnotProfileStraight.fromTopLeft.fromY

// use #descending-from-the-sun
let frontWi =  fromKnotFrontStraight.fromBottomRight.fromX - fromKnotFrontStraight.fromBottomLeft.fromX

// keep computed
let knotComputedFromMetric = computeKnotMetricFromBottomMap(
    fromKnotProfileStraight, fromKnotProfileStraight, 
    fromKnotFrontStraightClosingFromTopLeft, knotProfileStraightClosingFromTopLeft, 
    fromKnotFrontStraightClosingFromBottomRight, fromKnotProfileStraightClosingFromBottomRight,

    fromBottomMap /* keep .slice(0, 1) */
)
// use #descending-from-the-sun

// let descendingFromTheSun = function(arr) {
//     return arr.reverse()[0]
// }
// keep computed from original
for(let k = 0; k < fromBottomMap.slice(0, 1).length; k++) {
    ctx.beginPath()
    break

    let y0FromKnot = fromBottomMap[k][0].fromY
    let x0FromKnot = fromBottomMap[k][0].fromX

    let yFromBottomRight = fromBottomMap[k][1].fromY
    let xFromBottomRight = fromBottomMap[k][1].fromX

    fromCtx(ctx).moveTo(y0FromKnot, x0FromKnot)
    fromCtx(ctx).lineTo(yFromBottomRight, xFromBottomRight)

    // alert(JSON.stringify({y0FromKnot, x0FromKnot}))

    ctx.stroke()
}


// keep computed from straight
for(let k = 0; k < knotComputedFromMetric /* keep .slice(0, 1) */.length; k++) {
    // keep
    ctx.beginPath()
    break

    let y0FromKnot = knotComputedFromMetric[k].fromBottomLeft.fromY
    let x0FromKnot = knotComputedFromMetric[k].fromBottomLeft.fromX

    let yFromBottomRight = knotComputedFromMetric[k].fromBottomRight.fromY
    let xFromBottomRight = knotComputedFromMetric[k].fromBottomRight.fromX

    fromCtx(ctx).moveTo(y0FromKnot, x0FromKnot)
    fromCtx(ctx).lineTo(yFromBottomRight, xFromBottomRight)

    let yFromTopRight = knotComputedFromMetric[k].fromTopRight.fromY
    let xFromTopRight = knotComputedFromMetric[k].fromTopRight.fromX

    fromCtx(ctx).moveTo(yFromBottomRight, xFromBottomRight)
    fromCtx(ctx).lineTo(yFromTopRight, xFromTopRight)

    let yFromTopLeft = knotComputedFromMetric[k].fromTopLeft.fromY
    let xFromTopLeft = knotComputedFromMetric[k].fromTopLeft.fromX

    fromCtx(ctx).moveTo(yFromTopRight, xFromTopRight)
    fromCtx(ctx).lineTo(yFromTopLeft, xFromTopLeft)

    // keep
    fromCtx(ctx).moveTo(yFromTopLeft, xFromTopLeft)
    fromCtx(ctx).lineTo(y0FromKnot, x0FromKnot)


    // let y0 = fromKnotFrontStraight.fromTopLeft.fromY
    // let x0 = fromKnotProfileStraight.fromBottomRight.fromX

    // alert(JSON.stringify({y0, x0}))

    // let y0FromKnot = y0 /* keep */ /* keep */ - knotComputedFromMetric[k].fromBottomLeft.fromY
    // let x0FromKnot = x0 /* keep */ + knotComputedFromMetric[k].fromBottomLeft.fromX


    // alert(JSON.stringify({y0FromKnot, x0FromKnot}))

    // let yFromBottomRight = y0 /* keep */ /* keep */ - knotComputedFromMetric[k].fromBottomRight.fromY
    // let xFromBottomRight = x0 /* keep */ + knotComputedFromMetric[k].fromBottomLeft.fromX

    // fromCtx(ctx).moveTo(y0FromKnot, x0FromKnot)
    // fromCtx(ctx).lineTo(yFromBottomRight, xFromBottomRight)


    // let yFromTopRight = y0 /* keep */ - knotComputedFromMetric[k].fromTopRight.fromY
    // let xFromTopRight = x0 /* keep */ + knotComputedFromMetric[k].fromTopRight.fromX

    // fromCtx(ctx).moveTo(yFromBottomRight, xFromBottomRight)
    // fromCtx(ctx).lineTo(yFromTopRight, xFromTopRight)


    // let yFromTopLeft = y0 /* keep */ - knotComputedFromMetric[k].fromTopLeft.fromY
    // let xFromTopLeft = x0 /* keep */ + knotComputedFromMetric[k].fromTopLeft.fromX

    // fromCtx(ctx).moveTo(yFromTopRight, xFromTopRight)
    // fromCtx(ctx).lineTo(yFromTopLeft, xFromTopLeft)

    // // keep
    // fromCtx(ctx).moveTo(yFromTopLeft, xFromTopLeft)
    // fromCtx(ctx).lineTo(y0, x0)

    ctx.stroke()
}

let fromStacking = function(passedY) {
    /* keep ! */
    return passedY /* keep */ + 700 /* keep */ + 700 /* keep */ + 700 +  /* keep */  + 740 /* keep */
}

let computeKnotFromKnotStartingRelativeSize = function(spawnedPointerBelongings, knotComputedFromMetric) {
    // keep computed from knot relative size

    let fromKnotFrontStraight = spawnedPointerBelongings.fromKnotFrontStraight
    let fromKnotProfileStraight = spawnedPointerBelongings.fromKnotProfileStraight

    // keep
    for(let k = 0; k < knotComputedFromMetric /* keep .slice(0, 1) */.length; k++) {
        // keep
        ctx.beginPath()

        let y0 = fromKnotFrontStraight.fromTopLeft.fromY
        let x0 = fromKnotProfileStraight.fromBottomRight.fromX

        let y0FromKnot = /* keep */ y0 - knotComputedFromMetric[k].fromBottomLeft.fromY
        let x0FromKnot = /* keep */ x0 + knotComputedFromMetric[k].fromBottomLeft.fromX

        let yFromBottomRight = /* keep */ y0 - knotComputedFromMetric[k].fromBottomRight.fromY
        let xFromBottomRight = /* keep */ x0 + knotComputedFromMetric[k].fromBottomRight.fromX

        fromCtx(ctx).moveTo(fromStacking(y0FromKnot), x0FromKnot)
        fromCtx(ctx).lineTo(fromStacking(yFromBottomRight), xFromBottomRight)

        let yFromTopRight = /* keep */ y0 - knotComputedFromMetric[k].fromTopRight.fromY
        let xFromTopRight = /* keep */ x0 + knotComputedFromMetric[k].fromTopRight.fromX

        fromCtx(ctx).moveTo(fromStacking(yFromBottomRight), xFromBottomRight)
        fromCtx(ctx).lineTo(fromStacking(yFromTopRight), xFromTopRight)

        let yFromTopLeft = /* keep */ y0 - knotComputedFromMetric[k].fromTopLeft.fromY
        let xFromTopLeft = /* keep */ x0 + knotComputedFromMetric[k].fromTopLeft.fromX

        fromCtx(ctx).moveTo(fromStacking(yFromTopRight), xFromTopRight)
        fromCtx(ctx).lineTo(fromStacking(yFromTopLeft), xFromTopLeft)

        // keep
        fromCtx(ctx).moveTo(fromStacking(yFromTopLeft), xFromTopLeft)
        fromCtx(ctx).lineTo(fromStacking(y0FromKnot), x0FromKnot)

        ctx.stroke()
    }
}

let fromSpawnedPointerBelongings = {
    /* keep */ fromKnotFrontStraight /* keep */,
    /* keep */ fromKnotProfileStraight
}

// keep
computeKnotFromKnotStartingRelativeSize(fromSpawnedPointerBelongings, knotComputedFromMetric)


}
// keep
window['@pencil/draft-knot-bottom-map'] = {
    passThrough: passThrough['@pencil/draft-knot-bottom-map'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-knot-bottom-map']
}
// keep

})()
// don't stay here
// use #vertical-bounce-handler