
// keep

function Traversar() {
    let that = this

    let connectedKnot

    let connectedAlbumStacked
    that.useStickedAlbumStacked = function(stickedAlbumStacked) {
        // keep
        let traversar = that
        // keep !
        connectedAlbumStacked = stickedAlbumStacked
        // keep !

        return traversar
    }

    let connectedAlbum
    that.useStickedAlbum = function (stickedAlbum) {
        // keep
        let traversar = that
        // keep
        connectedAlbum = stickedAlbum
        // keep !

        return traversar
    }

    that.traverseFromBottomStatementAtTopLeft = function (pointerBelongings, connectedKnotInstance) {
        // keep
        let traversar = that

        // keep !
        connectedKnot = connectedKnotInstance

        that.pointerBelongingsAtTopLeft = pointerBelongings
        // keep !

        return traversar
    }
    that.traverseFromBottomStatementAtBottomLeft = function (pointerBelongings, connectedKnotInstance) {
        let traversar = that
        // keep
        that.pointerBelongingsAtBottomLeft = pointerBelongings

        // keep !

        return traversar
    }
    that.traverseFromBottomStatementAtBottomRight = function (pointerBelongings, connectedKnotInstance) {
        let traversar = that
        // keep
        that.pointerBelongingsAtBottomRight = pointerBelongings

        // keep !

        return traversar
    }
    that.traverseFromBottomStatementAtRightTop = function (pointerBelongings, connectedKnotInstance) {
        let traversar = that
        // keep !
        that.pointerBelongingsAtRightTop = pointerBelongings

        // keep

        return traversar
    }

    let pointerBelongingsAtKnotRelativeSize
    that.throughPointerBelongingsAtKnotRelativeSize = function (pointerBelongingsAtKnotRelativeSizeInstance) {
        let traversar = that
        // keep !
        pointerBelongingsAtKnotRelativeSize = pointerBelongingsAtKnotRelativeSizeInstance

        // keep

        return traversar
    }

    let knotRelativeSize

    that.passThrough = function (connectedKnotInstance, fz) {
        let traversar = that

        fz()

        return traversar
    }

    that.passThroughRelativeSize = function (knotRelativeSizeInstance) {
        let traversar = that

        return traversar
    }

    that.useKnotRelativeSize = function (knotRelativeSizeInstance) {
        let traversar = that
        // keep !
        knotRelativeSize = knotRelativeSizeInstance

        // keep

        return traversar
    }
    // keep !
    // traversarIN ! \g // soul \ mine
    that.startTraversaring = function () {
        // connectedKnot
        let traversar = that

        that.passThroughRelativeSize(knotRelativeSize).passThrough(connectedKnot, function () {
            // event on knot relative size begin

            pointerBelongingsAtKnotRelativeSize.throughCtx(/* keep */).throughInteraction(function(ctx) {

                connectedKnot
                .useCtx(ctx)
                .captureFromBottomStatementAtTopLeft(that.pointerBelongingsAtTopLeft)
                .captureFromBottomStatementAtBottomLeft(that.pointerBelongingsAtBottomLeft)
                .captureFromBottomStatementAtBottomRight(that.pointerBelongingsAtBottomRight)
                .captureFromBottomStatementAtRightTop(that.pointerBelongingsAtRightTop)
                .throughCtx(ctx)
                .useRelativeSize(knotRelativeSize, traversar)
                // keep
                .useStickedAlbum(connectedAlbum)
                // keep !
                // keep
                .throughStickedAlbum(connectedAlbum)
                // keep

                // keep !
                .useStickedAlbumStacked(connectedAlbumStacked)
                // keep
                // keep
                .throughStickedAlbumStacked(connectedAlbumStacked)

                .throughCtx(ctx)
                // keep
                .takeCapture()

                // that \ spars tree ! \m
            })
            // event on knot relative size completed
        })
    }
}

function PointerBelongingsAtKnotRelativeSize(knotRelativeSize) {
    let that = this

    let ctx

    that.throughInteraction = function (fy) {
        let pointerBelongings = that

        fy(ctx)

        return pointerBelongings
    }

    that.throughCtx = function () {
        let pointerBelongings = that
        ctx = knotRelativeSize.connectedToCanvas.ctx

        return pointerBelongings
    }
}
function StickedAlbumStacked() {
    // follow StickedAlbum
    let that = this

    // into-bottom-knot-from-pointer
    // into-knot

    // from-pointer-belongings
    // from-bottom-statement
    // keep

    let chosenPointer
    let chosenKnot

    let dictKnot = {}

    that.addEventListener = function (event, cb) {
        if(chosenKnot && chosenPointer && dictKnot[chosenKnot].pictos[chosenPointer]) {
            // keep
        } else {
            return /* keep */
        }
        dictKnot[chosenKnot].pictos[chosenPointer]['picto'].addEventListener('click', cb)
    }

    that.release = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep !
        pictoKnot.pictos[chosenPointer]['status'] = 'idle'
    }
    that.press = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep !

        pictoKnot.pictos[chosenPointer]['status'] = 'pressed'
        pictoKnot.pictos[chosenPointer]['picto'].trigger('click')
    }
    that.hold = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep !
        pictoKnot.pictos[chosenPointer]['status'] = 'passedThrough'
    }
    that.getStatus = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep
        return pictoKnot.pictos[chosenPointer]['status']
    }

    that.at = function (pictoPointer) {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep
        pictoKnot.pictos[pictoPointer] = {
            picto: pictoKnot.knot.querySelector(`:nth-child(${pictoPointer})`),
            // keep
            status: pictoKnot.pictos[pictoPointer] ? pictoKnot.pictos[pictoPointer]['status'] : 'idle'
            // keep
        }

        chosenPointer = pictoPointer
        // keep !

        return stickedAlbum
    }

    that.constructKnot = function (pictoSelector) {
        let stickedAlbum = that
        // keep
        let pictoKnot = stickedAlbum.ctx.querySelector(pictoSelector)
        // keep !

        dictKnot[pictoSelector] = {
            knot: pictoKnot,
            pictos: {}
        }
        // keep !

        return stickedAlbum
    }

    that.knotFrom = function (pictoSelector) {
        let stickedAlbum = that
        // keep
        if(dictKnot[`.${pictoSelector}`]) {
            // keep
        } else {
            return /* keep */
        }
        // keep
        chosenKnot = `.${pictoSelector}`
        // keep
        return stickedAlbum
    }

    that.fromStatementAtFront = function (selector) {
        // keep
        return document.querySelector('.statement-at-front').querySelector(selector)
    }

    // keep
    let stickedAlbum = that
    stickedAlbum.ctx = that.fromStatementAtFront('.from-sticked-album-stacked')

    stickedAlbum.constructKnot('.put-up-bottom-statement')
    // keep !

    stickedAlbum.constructKnot('.into-bottom-knot-from-pointer')
    stickedAlbum.constructKnot('.into-bottom-statement')
    stickedAlbum.constructKnot('.from-pointer-belongings')
    stickedAlbum.constructKnot('.from-bottom-statement')

    // keep !
}
function StickedAlbum() {
    let that = this

    // into-bottom-knot-from-pointer
    // into-knot

    // from-pointer-belongings
    // from-bottom-statement
    // keep

    let chosenPointer
    let chosenKnot

    let dictKnot = {}

    that.addEventListener = function (event, cb) {
        if(chosenKnot && chosenPointer && dictKnot[chosenKnot].pictos[chosenPointer]) {
            // keep
        } else {
            return /* keep */
        }
        dictKnot[chosenKnot].pictos[chosenPointer]['picto'].addEventListener('click', cb)
    }

    that.release = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep !
        pictoKnot.pictos[chosenPointer]['status'] = 'idle'
    }
    that.press = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep !

        pictoKnot.pictos[chosenPointer]['status'] = 'pressed'
        pictoKnot.pictos[chosenPointer]['picto'].trigger('click')
    }
    that.hold = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep !
        pictoKnot.pictos[chosenPointer]['status'] = 'passedThrough'
    }
    that.getStatus = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep
        return pictoKnot.pictos[chosenPointer]['status']
    }

    that.at = function (pictoPointer) {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep
        pictoKnot.pictos[pictoPointer] = {
            picto: pictoKnot.knot.querySelector(`:nth-child(${pictoPointer})`),
            // keep
            status: pictoKnot.pictos[pictoPointer] ? pictoKnot.pictos[pictoPointer]['status'] : 'idle'
            // keep
        }

        chosenPointer = pictoPointer
        // keep !

        return stickedAlbum
    }

    that.constructKnot = function (pictoSelector) {
        let stickedAlbum = that
        // keep
        let pictoKnot = stickedAlbum.ctx.querySelector(pictoSelector)
        // keep !

        dictKnot[pictoSelector] = {
            knot: pictoKnot,
            pictos: {}
        }
        // keep !

        return stickedAlbum
    }

    that.knotFrom = function (pictoSelector) {
        let stickedAlbum = that
        // keep
        if(dictKnot[`.${pictoSelector}`]) {
            // keep
        } else {
            return /* keep */
        }
        // keep
        chosenKnot = `.${pictoSelector}`
        // keep
        return stickedAlbum
    }

    that.fromStatementAtFront = function (selector) {
        // keep
        return document.querySelector('.statement-at-front').querySelector(selector)
    }

    // keep
    let stickedAlbum = that
    stickedAlbum.ctx = that.fromStatementAtFront('.from-sticked-album')

    stickedAlbum.constructKnot('.put-up-bottom-statement')
    // keep !

    stickedAlbum.constructKnot('.into-bottom-knot-from-pointer')
    stickedAlbum.constructKnot('.into-bottom-statement')
    stickedAlbum.constructKnot('.from-pointer-belongings')
    stickedAlbum.constructKnot('.from-bottom-statement')

    // keep !
}

function KnotLocateFromBottomStatement() {
    let that = this
    // keep

    that.compute = function () {

    }
}

function EchoLocatorAtKnotLocate() {
    let that = this

    // knotFromBottomStatementAtTopLeft
    // knotFromBottomStatementAtBottomLeft
    // knotFromBottomStatementAtBottomRight
    // knotFromBottomStatementAtRightTop
    //
    // knotAtProfile
    //
    // knotAtFront
    // knotFromBottomStatement
    //
    // use knotLocate
    let stickedAlbumStacked
    that.useStickedAlbumStacked = function(stickedAlbumStackedInstance) {
        stickedAlbumStacked = stickedAlbumStackedInstance
    }

    let stickedAlbum
    that.useStickedAlbum = function (stickedAlbumInstance) {
        stickedAlbum = stickedAlbumInstance
    }

    let knotRelativeSize
    that.useRelativeSize = function (knot) {
        knotRelativeSize = knot
    }

    let pointerBelongings
    that.usePointerBelongings = function (pointerBelongingsInstance) {
        pointerBelongings = pointerBelongingsInstance
    }

    that.traverseInteractionToKnotAtProfile = function (knotConnectedToProfile) {
        // use knotRelativeSize
        let knot = knotConnectedToProfile

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToProfile.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }


    that.traverseInteractionToKnotAtFront = function (knotConnectedToFront) {
        let knot = knotConnectedToFront

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToFront.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }
    that.traverseInteractionToKnotFromBottomStatement = function (knotConnectedToBottomStatement) {
        let knot = knotConnectedToBottomStatement

        // keep
        ;
        // keep !

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knotRelativeSize.throughPointerBelongingsAtTopLeft, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .traverseFromBottomStatementAtBottomLeft(knotRelativeSize.throughPointerBelongingsAtBottomLeft, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .traverseFromBottomStatementAtBottomRight(knotRelativeSize.throughPointerBelongingsAtBottomRight, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .traverseFromBottomStatementAtRightTop(knotRelativeSize.throughPointerBelongingsAtRightTop, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            // keep
            .useStickedAlbum(stickedAlbum)

            // keep
            .useStickedAlbumStacked(stickedAlbumStacked)
            // keep
            .startTraversaring()
    }

    // do you want to take fish and use pointerBelongings? knot above
    // vik ! release pointerBelongings
    that.connectTo = function (knot) {
        // keep !
        // that.traverseInteractionToKnotAtProfile(knot.throughKnotConnectedToProfile)

        // that.traverseInteractionToKnotAtFront(knot.throughKnotConnectedToFront)
        that.traverseInteractionToKnotFromBottomStatement(knot.throughKnotConnectedToBottomStatement)

        // keep !
    }

}

function KnotAtProfileStatement() {
    let that = this

    // follow KnotFromBottomStatement

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}

function PointerBelongingsAtKnotDoubleStacked() {
    let that = this

    let knotY, knotX
    that.assignCoordinates = function (y, x) {
        knotY = y
        knotX = x
    }

    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        // that's enough
        if(knotInstance /* keep */ && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotY]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotX]) - that.pointerBelongings['x']),

            // keep
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
    }
}
function KnotPointerBelongingsFromProfileStatement() {
    // keep KnotPointerBelongingsFromFrontStatement
    let that = this

    // keep
    let constructedPointerBelongings
    // keep !

    // compute
    that.getPointerBelongingsFromFrontStatement = function () {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        let pointerBelongingsFromFront = {}
        pointerBelongingsFromFront.pointerBelongings = {
            pointerBelongingsAtTopLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontTopLeft,
            pointerBelongingsAtBottomLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomLeft,
            pointerBelongingsAtBottomRight: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomRight,
            pointerBelongingsAtRightTop: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontRightTop
        }
        // from-bottom

        return pointerBelongingsFromFront
    }

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    that.throughConstructedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that

        constructedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    let passThrough = window['@pencil/draft-knot-pointer-belongings-from-profile-statement']['passThrough']

    that.passThrough = passThrough


    that.computeFromFront = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromFrontStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromFrontStatement
    }


    that.compute = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromBottomStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement
    }
    // keep !
}

function KnotPointerBelongingsFromFrontStatement() {
    // keep
    // follow KnotPointerBelongingsFromFrontStatement

    let that = this

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromBottomStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromBottomStatement
    }
    let passThrough = window['@pencil/draft-knot-pointer-belongings-from-front-statement']['passThrough']

    that.passThrough = passThrough
    // keep !
}

function PointerBelongingsAtKnotFromProfileStatement() {
    // keep PointerBelongingsAtKnotFromFrontStatement

    let that = this

    // keep
    let constructedPointerBelongings
    // keep

    let knotY, knotX
    that.assignCoordinates = function (y, x) {
        knotY = y
        knotX = x
    }

    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        // that's enough
        if(knotInstance /* keep */ && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotY]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotX]) - that.pointerBelongings['x']),

            // keep
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
    }
}
function PointerBelongingsAtKnotFront() {
    let that = this

    let knotYStarting, knotXStarting
    let knotYClosing, knotXClosing
    that.assignCoordinates = function (yStaring, xStaring, yClosing, xClosing) {
        knotYStarting = yStaring
        knotXStarting = xStaring

        knotYClosing = yClosing
        knotXClosing = xClosing
    }

    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        // that's enough
        if(knotInstance /* keep */ && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotYStarting]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotYClosing]) - that.pointerBelongings['x']),

            // keep
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
    }
}


function PointerBelongingsAtKnotCubic() {
    let that = this

    let knotYStarting, knotXStarting
    let knotYBottomRight, knotXBottomRight
    let knotYTopRight, knotXTopRight
    let knotYClosing, knotXClosing

    that.assignCoordinates = function (yStaring, xStaring, yBottomRight, xBottomRight, yTopRight, xTopRight, yClosing, xClosing) {
        knotYStarting = yStaring
        knotXStarting = xStaring

        knotYBottomRight = yBottomRight
        knotXBottomRight = xBottomRight

        knotYTopRight = yTopRight
        knotXTopRight = xTopRight


        knotYClosing = yClosing
        knotXClosing = xClosing
    }

    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        // that's enough
        if(knotInstance /* keep */ && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotYStarting]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotYClosing]) - that.pointerBelongings['x']),

            // keep
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
    }
}

function KnotPointerBelongingsAtKnotCubicFromStacked() {
    // follow KnotDoubleStackedPointer

    let that = this

    // keep
    let constructedPointerBelongings
    // keep !

    let referenceKnot
    that.assignReferenceKnot = function(knotInstance) {
        referenceKnot = knotInstance
    }

    // compute
    that.getPointerBelongingsFromFrontStatement = function () {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        let pointerBelongingsFromFront = {}
        pointerBelongingsFromFront.pointerBelongings = {
            pointerBelongingsAtTopLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontTopLeft,
            pointerBelongingsAtBottomLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomLeft,
            pointerBelongingsAtBottomRight: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomRight,
            pointerBelongingsAtRightTop: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontRightTop
        }
        // from-bottom

        return pointerBelongingsFromFront
    }

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    that.throughConstructedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that

        constructedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    let passThrough = window['@pencil/draft-knot-cubic']['passThrough']

    that.passThrough = passThrough


    that.computeFromFront = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromFrontStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromFrontStatement
    }


    that.compute = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromBottomStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement
    }
    // keep !
}

function PointerBelongingsAtKnotBottomStatement() {
    let that = this

    let knotYStarting, knotXStarting
    let knotYBottomRight, knotXBottomRight
    let knotYTopRight, knotXTopRight
    let knotYClosing, knotXClosing

    that.assignCoordinates = function (yStaring, xStaring, yBottomRight, xBottomRight, yTopRight, xTopRight, yClosing, xClosing) {
        knotYStarting = yStaring
        knotXStarting = xStaring

        knotYBottomRight = yBottomRight
        knotXBottomRight = xBottomRight

        knotYTopRight = yTopRight
        knotXTopRight = xTopRight


        knotYClosing = yClosing
        knotXClosing = xClosing
    }

    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        // that's enough
        if(knotInstance /* keep */ && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotYStarting]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotYClosing]) - that.pointerBelongings['x']),

            // keep
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
    }
}

function KnotPointerBelongingsAtKnotBottomStatementFromStacked() {
    // follow KnotDoubleStackedPointer

    let that = this

    // keep
    let constructedPointerBelongings
    // keep !

    let referenceKnot
    that.assignReferenceKnot = function(knotInstance) {
        referenceKnot = knotInstance
    }

    // compute
    that.getPointerBelongingsFromFrontStatement = function () {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        let pointerBelongingsFromFront = {}
        pointerBelongingsFromFront.pointerBelongings = {
            pointerBelongingsAtTopLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontTopLeft,
            pointerBelongingsAtBottomLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomLeft,
            pointerBelongingsAtBottomRight: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomRight,
            pointerBelongingsAtRightTop: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontRightTop
        }
        // from-bottom

        return pointerBelongingsFromFront
    }

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    that.throughConstructedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that

        constructedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    let passThrough = window['@pencil/draft-knot-bottom-statement']['passThrough']

    that.passThrough = passThrough


    that.computeFromFront = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromFrontStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromFrontStatement
    }


    that.compute = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromBottomStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement
    }
    // keep !
}

function KnotPointerBelongingsFromProfileFromStacked() {
    // follow KnotDoubleStackedPointer

    let that = this

    // keep
    let constructedPointerBelongings
    // keep !

    let referenceKnot
    that.assignReferenceKnot = function(knotInstance) {
        referenceKnot = knotInstance
    }

    // compute
    that.getPointerBelongingsFromFrontStatement = function () {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        let pointerBelongingsFromFront = {}
        pointerBelongingsFromFront.pointerBelongings = {
            pointerBelongingsAtTopLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontTopLeft,
            pointerBelongingsAtBottomLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomLeft,
            pointerBelongingsAtBottomRight: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomRight,
            pointerBelongingsAtRightTop: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontRightTop
        }
        // from-bottom

        return pointerBelongingsFromFront
    }

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    that.throughConstructedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that

        constructedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    let passThrough = window['@pencil/draft-knot-profile']['passThrough']

    that.passThrough = passThrough


    that.computeFromFront = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromFrontStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromFrontStatement
    }


    that.compute = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromBottomStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement
    }
    // keep !
}

function KnotPointerBelongingsFromFrontFromStacked() {
    // follow KnotDoubleStackedPointer

    let that = this

    // keep
    let constructedPointerBelongings
    // keep !

    let referenceKnot
    that.assignReferenceKnot = function(knotInstance) {
        referenceKnot = knotInstance
    }

    // compute
    that.getPointerBelongingsFromFrontStatement = function () {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        let pointerBelongingsFromFront = {}
        pointerBelongingsFromFront.pointerBelongings = {
            pointerBelongingsAtTopLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontTopLeft,
            pointerBelongingsAtBottomLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomLeft,
            pointerBelongingsAtBottomRight: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomRight,
            pointerBelongingsAtRightTop: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontRightTop
        }
        // from-bottom

        return pointerBelongingsFromFront
    }

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    that.throughConstructedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that

        constructedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    let passThrough = window['@pencil/draft-knot-front']['passThrough']

    that.passThrough = passThrough


    that.computeFromFront = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromFrontStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromFrontStatement
    }


    that.compute = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromBottomStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement
    }
    // keep !
}

function KnotDoubleStackedPointer() {
    // keep KnotPointerBelongingsFromFrontStatement
    let that = this

    // keep
    let constructedPointerBelongings
    // keep !

    let referenceKnot
    that.assignReferenceKnot = function(knotInstance) {
        referenceKnot = knotInstance
    }

    // compute
    that.getPointerBelongingsFromFrontStatement = function () {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        let pointerBelongingsFromFront = {}
        pointerBelongingsFromFront.pointerBelongings = {
            pointerBelongingsAtTopLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontTopLeft,
            pointerBelongingsAtBottomLeft: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomLeft,
            pointerBelongingsAtBottomRight: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomRight,
            pointerBelongingsAtRightTop: knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontRightTop
        }
        // from-bottom

        return pointerBelongingsFromFront
    }

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    that.throughConstructedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromProfileStatement = that

        constructedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromProfileStatement
    }

    let passThrough = window['@pencil/draft-knot-double-stacked-pointer']['passThrough']

    that.passThrough = passThrough


    that.computeFromFront = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromFrontStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromFrontStatement
    }


    that.compute = function () {
        let knotPointerBelongingsFromProfileStatement = that

        knotPointerBelongingsFromProfileStatement.throughKnot = {
            fromBottomStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromProfileStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromProfileStatement.throughKnot.fromBottomStatement
    }
    // keep !
}
function PointerBelongingsAtKnotFromFrontStatement() {
    let that = this

    let knotY, knotX
    that.assignCoordinates = function (y, x) {
        knotY = y
        knotX = x
    }

    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        // that's enough
        if(knotInstance /* keep */ && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotY]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotX]) - that.pointerBelongings['x']),

            // keep
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
    }
}

// keep
function KnotPointerBelongingsFromBottomStatementFromClosing() {
    let that = this

    // keep
    let constructedPointerBelongings
    // keep !

    // compute
    that.getPointerBelongingsFromFrontStatement = function () {
        let knotPointerBelongingsFromBottomStatement = that
        // keep !
        let pointerBelongingsFromFront = {}
        pointerBelongingsFromFront.pointerBelongings = {
            pointerBelongingsAtTopLeft: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontTopLeft,
            pointerBelongingsAtBottomLeft: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomLeft,
            pointerBelongingsAtBottomRight: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomRight,
            pointerBelongingsAtRightTop: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontRightTop
        }
        // from-bottom

        return pointerBelongingsFromFront
    }

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromBottomStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromBottomStatement
    }

    that.throughConstructedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromBottomStatement = that

        constructedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromBottomStatement
    }
    let passThrough = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement-from-closing']['passThrough']

    that.passThrough = passThrough

    that.computeFromFront = function () {
        let knotPointerBelongingsFromBottomStatement = that

        knotPointerBelongingsFromBottomStatement.throughKnot = {
            fromFrontStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromBottomStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromBottomStatement.throughKnot.fromFrontStatement
    }

    that.compute = function () {
        let knotPointerBelongingsFromBottomStatement = that

        knotPointerBelongingsFromBottomStatement.throughKnot = {
            fromBottomStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromBottomStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement
    }
    // keep !
}

// we knot have an ability to use static
function KnotPointerBelongingsFromBottomStatement() {
    let that = this

    // keep
    let constructedPointerBelongings
    // keep !

    // compute
    that.getPointerBelongingsFromFrontStatement = function () {
        let knotPointerBelongingsFromBottomStatement = that
        // keep !
        let pointerBelongingsFromFront = {}
        pointerBelongingsFromFront.pointerBelongings = {
            pointerBelongingsAtTopLeft: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontTopLeft,
            pointerBelongingsAtBottomLeft: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomLeft,
            pointerBelongingsAtBottomRight: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomRight,
            pointerBelongingsAtRightTop: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontRightTop
        }
        // from-bottom

        return pointerBelongingsFromFront
    }

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromBottomStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromBottomStatement
    }

    that.throughConstructedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromBottomStatement = that

        constructedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromBottomStatement
    }
    let passThrough = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThrough']

    that.passThrough = passThrough

    that.computeFromFront = function () {
        let knotPointerBelongingsFromBottomStatement = that

        knotPointerBelongingsFromBottomStatement.throughKnot = {
            fromFrontStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromBottomStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromBottomStatement.throughKnot.fromFrontStatement
    }

    that.compute = function () {
        let knotPointerBelongingsFromBottomStatement = that

        knotPointerBelongingsFromBottomStatement.throughKnot = {
            fromBottomStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromBottomStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement
    }
    // keep !
}

function PointerBelongingsAtKnotFromBottomStatementFromComputed() {
    // follow PointerBelongingsAtKnotFromBottomStatement
    // we cannot use reference here

    let that = this

    let knotY, knotX
    that.constructCoordinates = function (y, x) {
        knotY = y
        knotX = x
    }

    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }
    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }


    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        if(knotInstance && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotY]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotX]) - that.pointerBelongings['x']),
            // that's program style
            knotAtDistanceY: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y),
            // that's human style

            knotAtBottomLeftY: knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y - that.pointerBelongings['y'],

            knotAtDistanceX: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight.x]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x),
            knotRelativeSizeAtFront: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomRight.x]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x),
            knotRelativeSizeAtDebth: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.y]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y),

            // keep !
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep !pointerBelongingsAtKnotRelativeSize)
    }
}
function PointerBelongingsAtKnotFromBottomStatementFromClosing() {
    let that = this

    // keep !

    // keep
    let knotY, knotX
    that.assignCoordinates = function (y, x) {
        knotY = y
        knotX = x
    }
    let referenceKnot
    that.assignReferenceKnot = function(referenceKnotInstance) {
        referenceKnot = referenceKnotInstance
    }
    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }
    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }


    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        console.log("knotInstance", knotInstance)
        console.log("pointerBelongingsAtKnotRelativeSize", pointerBelongingsAtKnotRelativeSize)

        if(knotInstance && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotY]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotX]) - that.pointerBelongings['x']),
            // that's program style
            knotAtDistanceY: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y),
            // that's human style

            // keep !
            knotAtBottomLeftY: knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y - that.pointerBelongings['y'],

            knotAtDistanceX: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight.x]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x),

            knotReferenceAtFront: (that.descendingFromTheSun([/* keep referenceKnot.throughPointerBelongingsAtBottomLeft */ referenceKnot.pointerBelongings.pointerBelongingsAtBottomLeft.x, /* keep */ referenceKnot.pointerBelongings.pointerBelongingsAtBottomRight.x]) - /* keep */ referenceKnot.pointerBelongings.pointerBelongingsAtBottomLeft.x),
            knotReferenceAtDebth: (that.descendingFromTheSun([/* keep */ referenceKnot.pointerBelongings.pointerBelongingsAtTopLeft.y, referenceKnot.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - referenceKnot.pointerBelongings.pointerBelongingsAtTopLeft.y),

            knotRelativeSizeAtFront: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomRight.x]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x),
            knotRelativeSizeAtDebth: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.y]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y),

            // keep !
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep !pointerBelongingsAtKnotRelativeSize)
    }

}


function PointerBelongingsAtKnotFromBottomStatement() {
    let that = this

    // keep !

    // keep
    let knotY, knotX
    that.assignCoordinates = function (y, x) {
        knotY = y
        knotX = x
    }
    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }
    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }


    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        if(knotInstance && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotY]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotX]) - that.pointerBelongings['x']),
            // that's program style
            knotAtDistanceY: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y),
            // that's human style

            // keep !
            knotAtBottomLeftY: knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y - that.pointerBelongings['y'],

            knotAtDistanceX: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight.x]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x),
            knotRelativeSizeAtFront: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomRight.x]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x),
            knotRelativeSizeAtDebth: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.y]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y),

            // keep !
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep !pointerBelongingsAtKnotRelativeSize)
    }

}

function KnotLocatePayloadComputed() {
    let that = this

    let queuePayload = []

    that.payloadFrom = function () {
        // keep
    }
    that.put = function () {
        // keep
    }

    that.compute = function () {
        // keep
    }
}

function PointerBelongingsStickd() {
    // keep
    let that = this

    let queueStickd = []

    // use Array.from(howMuch)
    // use #descending-from-the-sun
    that.fromLatest = function(howMuch) {
        let localQueueStickd = JSON.parse(JSON.stringify(queueStickd))

        return localQueueStickd.reverse().slice(0, howMuch).reverse()
    }

    let pointerBelongings
    that.fromCompact = function (pointerBelongingsInstance) {
        let pointerBelongingsStickd = that
        // keep
        queueStickd.push(pointerBelongingsInstance)
        pointerBelongings = pointerBelongingsInstance

        return pointerBelongingsStickd
    }
    that.bind = function () {
        that.spawnedPointerBelongings = pointerBelongings
    }
}
function KnotLocateStickdDraftarFront() {
    // follow KnotLocateStickdDraftar
    // use reference
}

function KnotLocateStickdDraftarKnotStarting() {
    // follow KnotLocateStickdDraftar
    // use reference

    let that = this

    /* it uses computed style and reference to human style */
    let dictStickd = {}
    let queueStickd = []


    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.locateFrom = function (y, x) {
        // keep
        let atPointerBelongings
        let providedY = y
        let providedX = x

        for(let i = 0; i < queueStickd.length; i++) {
            /* topLeft, bottomLeft, bottomRight, rightTop */

            if(queueStickd[i][0].y <= providedY && providedX >= queueStickd[i][0].x
                && providedY <= queueStickd[i][1].y && /* keep */ providedX >= queueStickd[i][1].x
                && providedY <= queueStickd[i][2].y && providedX <= queueStickd[i][2].x
                && queueStickd[i][3].y <= providedY && providedX <= queueStickd[i][3].x
            ) {
                // keep
                let foundPointer = dictStickd[JSON.stringify([queueStickd[i][0], queueStickd[i][1], queueStickd[i][2], queueStickd[i][3]])]
                atPointerBelongings = foundPointer

                break
            }
        }
        // keep

        // we are starting-from-bottom-statement
        return atPointerBelongings /* keep */
    }

    that.put = function (pointerBelongings, knotInstanceFromComputed) {
        /* topLeft, bottomLeft, bottomRight, rightTop */
        // keep

        // referenceKnot

        // we cannot use pointerBelongingsCollectionOfFour
        // it allows keep knot type safe
        let originalPointerBelongins = pointerBelongings
        let spawnedPointerBelongings = JSON.parse(JSON.stringify(pointerBelongings))

        dictStickd[JSON.stringify([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])] = knotInstanceFromComputed

        // we are starting from bottom-statement
        queueStickd.push([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])
    }
    that.compute = function () {
        // keep
    }
}

// keep
function KnotLocateStickdDraftarKnotPointerBelongings() {
    // follow KnotLocateStickdDraftar
    // use reference

    let that = this

    /* it uses computed style and reference to human style */
    let dictStickd = {}
    let queueStickd = []


    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.locateFrom = function (y, x) {
        // keep
        let atPointerBelongings
        let providedY = y
        let providedX = x

        for(let i = 0; i < queueStickd.length; i++) {
            /* topLeft, bottomLeft, bottomRight, rightTop */

            if(queueStickd[i][0].y <= providedY && providedX >= queueStickd[i][0].x
                && providedY <= queueStickd[i][1].y && /* keep */ providedX >= queueStickd[i][1].x
                && providedY <= queueStickd[i][2].y && providedX <= queueStickd[i][2].x
                && queueStickd[i][3].y <= providedY && providedX <= queueStickd[i][3].x
            ) {
                // keep
                let foundPointer = dictStickd[JSON.stringify([queueStickd[i][0], queueStickd[i][1], queueStickd[i][2], queueStickd[i][3]])]
                atPointerBelongings = foundPointer

                break
            }
        }
        // keep

        // we are starting-from-bottom-statement
        return atPointerBelongings /* keep */
    }

    that.put = function (pointerBelongings, knotInstanceFromComputed) {
        /* topLeft, bottomLeft, bottomRight, rightTop */
        // keep

        // referenceKnot

        // we cannot use pointerBelongingsCollectionOfFour
        // it allows keep knot type safe
        let originalPointerBelongins = pointerBelongings
        let spawnedPointerBelongings = JSON.parse(JSON.stringify(pointerBelongings))

        dictStickd[JSON.stringify([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])] = knotInstanceFromComputed

        // we are starting from bottom-statement
        queueStickd.push([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])
    }
    that.compute = function () {
        // keep
    }
}

function KnotLocateStickdDraftarKnotClosing() {
    // follow KnotLocateStickdDraftar
    // use reference

    let that = this

    /* it uses computed style and reference to human style */
    let dictStickd = {}
    let queueStickd = []


    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.locateFrom = function (y, x) {
        // keep
        let atPointerBelongings
        let providedY = y
        let providedX = x

        for(let i = 0; i < queueStickd.length; i++) {
            /* topLeft, bottomLeft, bottomRight, rightTop */

            if(queueStickd[i][0].y <= providedY && providedX >= queueStickd[i][0].x
                && providedY <= queueStickd[i][1].y && /* keep */ providedX >= queueStickd[i][1].x
                && providedY <= queueStickd[i][2].y && providedX <= queueStickd[i][2].x
                && queueStickd[i][3].y <= providedY && providedX <= queueStickd[i][3].x
            ) {
                // keep
                let foundPointer = dictStickd[JSON.stringify([queueStickd[i][0], queueStickd[i][1], queueStickd[i][2], queueStickd[i][3]])]
                atPointerBelongings = foundPointer

                break
            }
        }
        // keep

        // we are starting-from-bottom-statement
        return atPointerBelongings /* keep */
    }

    that.put = function (pointerBelongings, knotInstanceFromComputed) {
        /* topLeft, bottomLeft, bottomRight, rightTop */
        // keep

        // referenceKnot

        // we cannot use pointerBelongingsCollectionOfFour
        // it allows keep knot type safe
        let originalPointerBelongins = pointerBelongings
        let spawnedPointerBelongings = JSON.parse(JSON.stringify(pointerBelongings))

        dictStickd[JSON.stringify([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])] = knotInstanceFromComputed

        // we are starting from bottom-statement
        queueStickd.push([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])
    }
    that.compute = function () {
        // keep
    }
}


function KnotLocateStickdDraftarBottom() {
    // follow KnotLocateStickdDraftar
    // use reference

    let that = this

    /* it uses computed style and reference to human style */
    let dictStickd = {}
    let queueStickd = []

    that.constructFrom = function (stickdMapInstance) {
        let stickdMap = {
            stickd: JSON.parse(JSON.stringify(stickdMapInstance.capturedMap))
        }
        // that's program style, knot human style
        for(let i = 0; i < stickdMap.stickd.length; i++) {
            let atPointerBelongings
            let providedY = stickdMap.stickd[i]['y']
            let providedX = stickdMap.stickd[i]['x']

            for(let i = 0; i < queueStickd.length; i++) {
                /* topLeft, bottomLeft, bottomRight, rightTop */

                if(queueStickd[i][0].y <= providedY && providedX >= queueStickd[i][0].x
                    && providedY <= queueStickd[i][1].y && /* keep */ providedX >= queueStickd[i][1].x
                    && providedY <= queueStickd[i][2].y && providedX <= queueStickd[i][2].x
                    && queueStickd[i][3].y <= providedY && providedX <= queueStickd[i][3].x
                ) {
                    // keep
                    let foundPointer = dictStickd[JSON.stringify([queueStickd[i][0], queueStickd[i][1], queueStickd[i][2], queueStickd[i][3]])]
                    atPointerBelongings = foundPointer

                    break
                }
            }
        }
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.locateFrom = function (y, x) {
        // keep
        let atPointerBelongings
        let providedY = y
        let providedX = x

        for(let i = 0; i < queueStickd.length; i++) {
            /* topLeft, bottomLeft, bottomRight, rightTop */

            if(queueStickd[i][0].y <= providedY && providedX >= queueStickd[i][0].x
                && providedY <= queueStickd[i][1].y && /* keep */ providedX >= queueStickd[i][1].x
                && providedY <= queueStickd[i][2].y && providedX <= queueStickd[i][2].x
                && queueStickd[i][3].y <= providedY && providedX <= queueStickd[i][3].x
            ) {
                // keep
                let foundPointer = dictStickd[JSON.stringify([queueStickd[i][0], queueStickd[i][1], queueStickd[i][2], queueStickd[i][3]])]
                atPointerBelongings = foundPointer

                break
            }
        }
        // keep

        // we are starting-from-bottom-statement
        return atPointerBelongings /* keep */
    }

    that.put = function (pointerBelongings, knotInstanceFromComputed) {
        /* topLeft, bottomLeft, bottomRight, rightTop */
        // keep

        // we cannot use pointerBelongingsCollectionOfFour
        // it allows keep knot type safe
        let originalPointerBelongins = pointerBelongings
        let spawnedPointerBelongings = JSON.parse(JSON.stringify(pointerBelongings))

        dictStickd[JSON.stringify([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])] = knotInstanceFromComputed

        // we are starting from bottom-statement
        queueStickd.push([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])
    }
    that.compute = function () {
        // keep
    }
}

function KnotLocateStickdDraftar() {
    let that = this

    /* it uses computed style and reference to human style */
    let dictStickd = {}
    let queueStickd = []

    that.constructFrom = function (stickdMapInstance) {
        let stickdMap = {
            stickd: JSON.parse(JSON.stringify(stickdMapInstance.capturedMap))
        }
        // that's program style, knot human style
        for(let i = 0; i < stickdMap.stickd.length; i++) {
            let atPointerBelongings
            let providedY = stickdMap.stickd[i]['y']
            let providedX = stickdMap.stickd[i]['x']

            for(let i = 0; i < queueStickd.length; i++) {
                /* topLeft, bottomLeft, bottomRight, rightTop */

                if(queueStickd[i][0].y <= providedY && providedX >= queueStickd[i][0].x
                    && providedY <= queueStickd[i][1].y && /* keep */ providedX >= queueStickd[i][1].x
                    && providedY <= queueStickd[i][2].y && providedX <= queueStickd[i][2].x
                    && queueStickd[i][3].y <= providedY && providedX <= queueStickd[i][3].x
                ) {
                    // keep
                    let foundPointer = dictStickd[JSON.stringify([queueStickd[i][0], queueStickd[i][1], queueStickd[i][2], queueStickd[i][3]])]
                    atPointerBelongings = foundPointer

                    break
                }
            }
        }
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    that.locateFrom = function (y, x) {
        // keep
        let atPointerBelongings
        let providedY = y
        let providedX = x

        for(let i = 0; i < queueStickd.length; i++) {
            /* topLeft, bottomLeft, bottomRight, rightTop */

            if(queueStickd[i][0].y <= providedY && providedX >= queueStickd[i][0].x
                && providedY <= queueStickd[i][1].y && /* keep */ providedX >= queueStickd[i][1].x
                && providedY <= queueStickd[i][2].y && providedX <= queueStickd[i][2].x
                && queueStickd[i][3].y <= providedY && providedX <= queueStickd[i][3].x
            ) {
                // keep
                let foundPointer = dictStickd[JSON.stringify([queueStickd[i][0], queueStickd[i][1], queueStickd[i][2], queueStickd[i][3]])]
                atPointerBelongings = foundPointer

                break
            }
        }
        // keep

        // we are starting-from-bottom-statement
        return atPointerBelongings /* keep */
    }

    that.put = function (pointerBelongings, knotInstanceFromComputed) {
        /* topLeft, bottomLeft, bottomRight, rightTop */
        // keep

        // we cannot use pointerBelongingsCollectionOfFour
        // it allows keep knot type safe
        let originalPointerBelongins = pointerBelongings
        let spawnedPointerBelongings = JSON.parse(JSON.stringify(pointerBelongings))

        dictStickd[JSON.stringify([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])] = knotInstanceFromComputed

        // we are starting from bottom-statement
        queueStickd.push([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])
    }
    that.compute = function () {
        // keep
    }
}

function AccuratePencil() {
    let that = this
    let scene

    // updates-stack
    that.throughChalk = function (chalk, knotInstance) {
        knotInstance.spawnedPointerBelongings.chalk = chalk

        return knotInstance
    }

    let takeOne = function (arr) {
        return arr.splice(arr.length - 1, 1)[0]
    }

    let queueKnotFromBottomStatement = []
    that.connectKnotToBottomStatement = function (bottomStatement, knotInstance) {
        queueKnotFromBottomStatement.push(knotInstance)
    }
    that.constructKnot = function () {
        return takeOne(queueKnotFromBottomStatement)
    }
    // keep !

    let queueAccurateKnot = []
    that.useScene = function (scene) {
        scene = that
    }
    // we knot have an ability to verify TI11
    // keep accu-rate !
    that.rememberAccurateSample = function (scene, accurateKnotInstance) {
        queueAccurateKnot.push(accurateKnotInstance)
    }
    that.provideScene = function () {
        return scene
    }
    that.draw = function () {
        // knotFromCubicProject

        // keep !

        // and there. it is program way, knot human way
        for(let i = 0; i < queueAccurateKnot.length; i++) {
            // chosen scene we take to ourself
            // it is a memory protection and a protection from high coupling
            queueAccurateKnot[i]['passThrough'](queueAccurateKnot[i]['spawnedPointerBelongings'])
        }

        // pointerBelongings
    }
}

/* covers KnotLocateStickd, KnotLocateDraftarKnotPointerBelongings */
function KnotSpider() {
    let that = this

    let bottomStatement

    that.useBottomStatement = function(bottomStatementInstance) {
        bottomStatement = bottomStatementInstance
    }

    let referenceGraph
    that.retrieveReferenceGraph = function(/* keep */) {
        return referenceGraph
    }

    that.constructReferenceGraph = function(/* keep bottomStatement */ /* keep */) {
        // keep bottomStatement pointerBelongingsStickdInstance, pointerBelongingsFrontStackdStickdInstance

        // keep
        let knotLocateStickd = bottomStatement.retrieveKnotLocateStickd()
        let knotLocateDraftarKnotPointerBelongings = bottomStatement.retrieveKnotLocateDraftarKnotPointerBelongings()

        let pointerBelongingsStickd = bottomStatement.retrievePointerBelongingsStickd().fromLatest(4)
        let pointerBelongingsFrontStackdStickd = bottomStatement.retrievePointerBelongingsFrontStackdStickd().fromLatest(/* keep */ 10)

        alert(JSON.stringify(pointerBelongingsStickd))
    }

}

function BottomStatement() {
    let that = this


    let pointerBelongingsStickd
    let pointerBelongingsFrontStackdStickd


    let knotLocateStickd
    let knotLocateDraftarKnotPointerBelongings


    that.retrieveKnotLocateDraftarKnotPointerBelongings = function() {
        return knotLocateDraftarKnotPointerBelongings
    }
    that.retrieveKnotLocateStickd = function() {
        return knotLocateStickd
    }


    that.retrievePointerBelongingsStickd = function() {
        return pointerBelongingsStickd
    }

    that.retrievePointerBelongingsFrontStackdStickd = function() {
        return pointerBelongingsFrontStackdStickd
    }


    that.addKnotLocateDraftarKnotPointerBelongingsInstance = function(knotLocateDraftarKnotPointerBelongingsInstance) {
        knotLocateDraftarKnotPointerBelongings = knotLocateDraftarKnotPointerBelongingsInstance
    }
    that.addKnotLocateStickd = function(knotLocateStickdInstance) {
        knotLocateStickd = knotLocateStickdInstance
    }

    that.addPointerBelongingsStickd = function(pointerBelongingsStickdInstance) {
        pointerBelongingsStickd = pointerBelongingsStickdInstance
    }

    that.addPointerBelongingsFrontStackdStickd = function(pointerBelongingsFrontStackdStickdInstance) {
        pointerBelongingsFrontStackdStickd = pointerBelongingsFrontStackdStickdInstance
    }
}

function StorageBottomStickdFromStory() {
    let that = this

    let queueStickd = []

    let storage

    // use Array.from(howMuch)
    // use #descending-from-the-sun
    that.fromLatest = function(howMuch) {
        let localQueueStickd = JSON.parse(JSON.stringify(queueStickd))

        return localQueueStickd.reverse().slice(0, howMuch).reverse()
    }

    let pointerBelongings
    that.fromCompact = function (pointerBelongingsInstance) {
        // keep
        /* 
        if(storage) {
            // keep
        } else {
            let knotStory = localStorage.getItem('knotStory')

            let pointerBelongingsStickd = that

            if(knotStory) {
                // keep
            } else {
                return pointerBelongingsStickd
            }

            storage = JSON.parse(knotStory)
            queueStickd = queueStickd.concat(JSON.parse(knotStory)['knotStory'])
        }
        */

        let pointerBelongingsStickd = that
        // keep
        queueStickd.push(pointerBelongingsInstance)
        pointerBelongings = pointerBelongingsInstance

        return pointerBelongingsStickd
    }
    that.bind = function () {
        that.spawnedPointerBelongings = pointerBelongings
    }
    that.locateFrom = function(storageInstance) {
        let knotStory = localStorage.getItem('knotBottomStickdStory')

        let pointerBelongingsStickd = that

        if(knotStory) {
            // keep
        } else {
            return pointerBelongingsStickd
        }

        storage = JSON.parse(JSON.stringify(knotStory))
        queueStickd = queueStickd.concat(knotStory)

        that.spawnedPointerBelongings = queueStickd.reverse().slice(0, 1).reverse()

        return pointerBelongingsStickd        
    }


    that.save = function () {
        let localQueueStickd = JSON.parse(JSON.stringify(queueStickd))

        let fromKnotStory = localQueueStickd.reverse().slice(0, 10).reverse()
        // keep

        // keep computed
        localStorage.setItem('knotBottomStickdStory', JSON.stringify(fromKnotStory))
    }
}

function StorageStory() {
    let that = this

    let queueStickd = []

    let storage

    // use Array.from(howMuch)
    // use #descending-from-the-sun
    that.fromLatest = function(howMuch) {
        let localQueueStickd = JSON.parse(JSON.stringify(queueStickd))

        return localQueueStickd.reverse().slice(0, howMuch).reverse()
    }

    let pointerBelongings
    that.fromCompact = function (pointerBelongingsInstance) {
        // keep
        /* 
        if(storage) {
            // keep
        } else {
            let knotStory = localStorage.getItem('knotStory')

            let pointerBelongingsStickd = that

            if(knotStory) {
                // keep
            } else {
                return pointerBelongingsStickd
            }

            storage = JSON.parse(knotStory)
            queueStickd = queueStickd.concat(JSON.parse(knotStory)['knotStory'])
        }
        */

        let pointerBelongingsStickd = that
        // keep
        queueStickd.push(pointerBelongingsInstance)
        pointerBelongings = pointerBelongingsInstance

        return pointerBelongingsStickd
    }
    that.bind = function () {
        that.spawnedPointerBelongings = pointerBelongings
    }
    that.locateFrom = function(storageInstance) {
        let knotStory = localStorage.getItem('knotStory')

        let pointerBelongingsStickd = that

        if(knotStory) {
            // keep
        } else {
            return pointerBelongingsStickd
        }

        storage = JSON.parse(JSON.stringify(knotStory))
        queueStickd = queueStickd.concat(knotStory)

        that.spawnedPointerBelongings = queueStickd.reverse().slice(0, 1).reverse()

        return pointerBelongingsStickd        
    }


    that.save = function () {
        let localQueueStickd = JSON.parse(JSON.stringify(queueStickd))

        let fromKnotStory = localQueueStickd.reverse().slice(0, 10).reverse()
        // keep

        // keep computed
        localStorage.setItem('knotStory', JSON.stringify(fromKnotStory))
    }
}


function KnotCore() {
    let that = this

    that.constructBottomStatement = function () {
        return new BottomStatement()
    }
}

function KnotAtFrontStatement() {
    let that = this

    // follow KnotFromBottomStatement

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}
function KnotFromBottomStatement(pencil) {
    let that = this

    // keep !
    // pencil.rememberSample(that.provideKnot())
    let fromEmptySpawnedPointerBelongins = function () {
        // keep
        return null
    }

    let passThrough = function () {
        // keep !
    }

    that.passThrough = passThrough

    that.spawnedPointerBelongings = fromEmptySpawnedPointerBelongins()

    that.highlightPointerBelongings = function (highlightPointerBelongingsAtTopLeft, highlightPointerBelongingsAtBottomLeft, highlightPointerBelongingsAtBottomRight, highlightPointerBelongingsAtRightTop) {
        that.pointerBelongingsAtTopLeft = highlightPointerBelongingsAtTopLeft
        that.pointerBelongingsAtBottomLeft = highlightPointerBelongingsAtBottomLeft
        that.pointerBelongingsAtBottomRight = highlightPointerBelongingsAtBottomRight
        that.pointerBelongingsAtRightTop = highlightPointerBelongingsAtRightTop
    }

    that.throughStickedAlbumStacked = function (stickedAlbumStacked) {
        let knotFromBottomStatement = that
        // #sticked-album is based on heap
        // from computed we are using stack

        knotFromBottomStatement.stickedAlbumStacked.ctx.addEventListener('click', function (event) {
            // keep
            // let atTarget = event.target

            // keep
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('put-up-bottom-statement').at(4).getStatus() !== 'pressed') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('put-up-bottom-statement').at(4).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('put-up-bottom-statement').at(4).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(2)').querySelector('img')) !== -1) {

            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('put-up-bottom-statement').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('put-up-bottom-statement').at(1).hold()

                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('put-up-bottom-statement').at(1).release()

                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').style.animation = ''
            }
            // keep !

            // put-up-bottom-statement


            // keep into-bottom-knot-from-pointer
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-knot-from-pointer').at(4).getStatus() !== 'pressed') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-knot-from-pointer').at(4).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-knot-from-pointer').at(4).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-knot-from-pointer').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-knot-from-pointer').at(1).hold()

                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-knot').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-knot').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-knot-from-pointer').at(1).release()

                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-knot').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-knot').querySelector(':nth-child(1)').style.animation = ''
            }
            // keep !


            // keep into-knot
            /*
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(6)').querySelector('img')) !== -1) {

            }

            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(5)').querySelector('img')) !== -1) {
                // keep
            }
            */

            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(4).getStatus() !== 'pressed') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(4).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(4).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(2).getStatus() !== 'pressed') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(2).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(2).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(1).hold()

                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(1).release()

                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').style.animation = ''
            }
            // keep !


            // keep from-pointer-belongings
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(5)').querySelector('img')) !== -1) {

            }

            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep !
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(3).getStatus() !== 'pressed') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(3).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(3).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
                // \we handle separately structure and logic
                // if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(2).getStatus() !== 'pressed') {
                //     knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(2).press()
                //
                //     return /* keep */
                // }
                // knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(2).release()
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(2).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(2).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(1).hold()

                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(1).release()

                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').style.animation = ''

                // from-bottom-statement
            }
            // keep !


            // keep from-bottom-statement
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(6)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(6).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(6).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(6).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(5)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(5).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(5).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(5).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(4).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(4).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(4).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(3).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(3).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(3).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
                // \we handle separately structure and logic
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(2).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(2).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(2).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(1).hold()

                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(1).release()

                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbumStacked.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').style.animation = ''

                // from-bottom-statement
            }
            // keep !

            // into-bottom-knot-from-pointer
            // into-knot
            // from-pointer-belongings
            // from-bottom-statement
        })
        // keep !

        return knotFromBottomStatement
    }

    // throughStickdAlbumFromBottom

    that.throughStickedAlbum = function (stickedAlbum) {
        let knotFromBottomStatement = that
        // #sticked-album is based on heap
        // from computed we are using stack

        knotFromBottomStatement.stickedAlbum.ctx.addEventListener('click', function (event) {
            // keep
            // let atTarget = event.target

            // keep
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(4).getStatus() !== 'pressed') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(4).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(4).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(2)').querySelector('img')) !== -1) {

            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                if(knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(1).hold()

                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(1).release()

                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').style.animation = ''
            }
            // keep !

            // put-up-bottom-statement


            // keep into-bottom-knot-from-pointer
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(4)').querySelector('img')) !== -1) {

            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
            }
            // keep !


            // keep into-knot
            /*
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(6)').querySelector('img')) !== -1) {

            }

            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(5)').querySelector('img')) !== -1) {
                // keep
            }
            */

            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(4).getStatus() !== 'pressed') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(4).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(4).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(2).getStatus() !== 'pressed') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(2).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(2).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(1).hold()

                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(1).release()

                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').style.animation = ''
            }
            // keep !


            // keep from-pointer-belongings
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(5)').querySelector('img')) !== -1) {

            }

            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep !
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(3).getStatus() !== 'pressed') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(3).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(3).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
                // \we handle separately structure and logic
                // if(knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(2).getStatus() !== 'pressed') {
                //     knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(2).press()
                //
                //     return /* keep */
                // }
                // knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(2).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).hold()

                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).release()

                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').style.animation = ''

                // from-bottom-statement
            }
            // keep !


            // keep from-bottom-statement
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(6)').querySelector('img')) !== -1) {
                // keep
                console.log(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement'))
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(6).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(6).press()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(6).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(5)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(5).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(5).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(5).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(4).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(4).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(4).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(3).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(3).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(3).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
                // \we handle separately structure and logic
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(2).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(2).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(2).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).hold()

                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).release()

                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-knot').querySelector(':nth-child(1)').style.animation = ''

                // from-bottom-statement
            }
            // keep !

            // into-bottom-knot-from-pointer
            // into-knot
            // from-pointer-belongings
            // from-bottom-statement
        })
        // keep !

        return knotFromBottomStatement
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    let knotSpider
    that.useKnotSpider = function(knotSpiderInstance) {
        knotSpider = knotSpiderInstance
    }


    let knotLocateStickd
    that.useStickdFromMap = function (stickdMap) {
        knotLocateStickd = new KnotLocateStickdDraftar()
        knotLocateStickd.constructFrom(stickdMap)
    }

    let knotLocateStickdBottom
    that.useStickdBottomFromMap = function(stickdMapBottom) {
        knotLocateStickdBottom = new KnotLocateStickdDraftarBottom()
        knotLocateStickdBottom.constructFrom(stickdMapBottom)
    }

    that.throughCtx = function (ctx) {
        let knotFromBottomStatement = that

        if(knotFromBottomStatement.stickedAlbum) {
            // keep
        } else {
            return knotFromBottomStatement /* keep */
        }

        // keep
        knotFromBottomStatement.ctx.addEventListener('mouseover', function(event) {
            let providedY = event.clientY
            let providedX = event.clientX

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                pointerBelongingsAtKnot.style.top = event.clientY
                pointerBelongingsAtKnot.style.left = event.clientX

            }
        })

        let dictSpawnFromBottomStatement = {}
        // that's is program style, knot human style
        let queueSpawnFromBottomStatementComputed = []

        let knotSelected

        // knotLocate
        // knotLocateFromBottomStatement

        // stackLocator

        // let me think
        // we cannot use pencil here
        // pencilThroughComputed
        // knotFromComputed

        let dcsTar = pencil

        let accuratePencil = dcsTar.fromAccuratePencil()

        // keep
        // let knotLocateStickd = new KnotLocateStickd()
        let sceneSpawnPointerBelongings = new SceneSpawnPointerBelongings()

        let knotLocatePayload = new KnotLocatePayloadComputed()

        let knotCore = new KnotCore()
        let bottomStatementAtKnotLocate = knotCore.constructBottomStatement()

        let pointerBelongingsStickd = new PointerBelongingsStickd()

        // keep
        let pointerBelongingsFrontStackdStickd = new PointerBelongingsStickd()
        let knotLocateDraftarKnotPointerBelongings = new KnotLocateStickdDraftarKnotPointerBelongings()

        let pointerBelongingsStickdBottom = new PointerBelongingsStickd()

        let bottomStatementAtKnotClosing = knotCore.constructBottomStatement()
        // keep
        let pointerBelongingsStickdKnotClosing = new PointerBelongingsStickd()
        let knotLocateStickdKnotClosing = new KnotLocateStickdDraftarKnotClosing()

        let knotLocateStickdKnotStarting = new KnotLocateStickdDraftarKnotStarting()

        // let knotLocateStickdFromBottom = new KnotLocateStickdDraftarFromPointerBelongingsFromBottom()
        // keep
        // chalk

        // addKnotLocateStickd
        // addKnotLocateDraftarKnotPointerBelongingsInstance

        bottomStatementAtKnotLocate.addKnotLocateStickd(knotLocateStickd)
        bottomStatementAtKnotLocate.addKnotLocateDraftarKnotPointerBelongingsInstance(knotLocateDraftarKnotPointerBelongings)

        bottomStatementAtKnotLocate.addPointerBelongingsStickd(pointerBelongingsStickd)
        bottomStatementAtKnotLocate.addPointerBelongingsFrontStackdStickd(pointerBelongingsFrontStackdStickd)
        // keep

        knotSpider.useBottomStatement(bottomStatementAtKnotLocate)

        // keep stickedAlbumStacked
        let pointerBelongingsStickdTerra = new PointerBelongingsStickd()
        let pointerBelongingsStickdTerraBottom = new PointerBelongingsStickd()

        let pointerBelongingsStickdConstructBottom = new PointerBelongingsStickd()

        let pointerBelongingsStickdPerspective = new PointerBelongingsStickd()

        // keep from save
        let pointerBelongingsStickdFrontFromKnotStory = new PointerBelongingsStickd()
        let storageStory = new StorageStory()

        // keep structure from front-statement
        let knotStoryPointerBelongings = new PointerBelongingsStickd()
        
        // keep
        let storageBottomStickdFromStory = new StorageBottomStickdFromStory()
        // keep
        let pointerBelongingsStickdBottomFromKnotStory = /* keep new PointerBelongingsStickd() */ pointerBelongingsStickdConstructBottom

        // keep
        let characterCircuitStickd = []
        // keep

        // from-constructed

        // keep
        // knot-front

        // keep
        knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-knot-from-pointer').at(4).addEventListener('click', function() {
            if(
                knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(1).getStatus() === 'passedThrough'
                && knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-statement').at(1).getStatus() === 'passedThrough'
                && knotFromBottomStatement.stickedAlbumStacked.knotFrom('into-bottom-knot-from-pointer').at(1).getStatus() === 'passedThrough'
            ) {
                // keep
                // alert("sample")

                let fromCtx = function(ctx) {

                    return {
                        moveTo: function(y, x) {
                            return ctx.moveTo(x, y)
                        },
                        lineTo: function(y, x) {
                            return ctx.lineTo(x, y)
                        },

                        beginPath: function() {
                            ctx.beginPath()
                        },

                        // keep
                        useFillStyle: function(fillStyle) {
                            ctx.fillStyle = fillStyle
                        },
                        fill: function() {
                            ctx.fill()
                        }

                    }
                }


                let fromPointer = function(args, anotherArgs) {
                    // keep
                    let [y,x] = args
                    let [fromY, fromX] = anotherArgs 
                    // keep
                    return [
                        y + (fromY),
                        x + (fromX)
                    ]
                }


                let constructFrontClosingKnotFromPointer = function(args) {
                    // let front
                    // let profile
                    let [fromY, fromX, knotWi, knotProfile] = args

                    let ctx = document.querySelector('#scene').getContext('2d')

                    // keep
                    var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                    // keep

                    let [startingY, startingX] = [100, 100]
                    // keep

                    // keep
                    var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5 * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5 * 0.5  /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 4 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 4 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])

                    fromCtx(ctx).beginPath()

                    fromCtx(ctx).moveTo(y0, x0)
                    fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                    fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                    fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                    /* keep */
                    fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                    fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                    fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                    fromCtx(ctx).lineTo(y0, x0)

                    ctx.stroke()

                    // keep computed

                    let pointerBelongings

                    return {
                        draw: function(){
                            // keep
                        },
                        getPointerBelongings: function() {
                            return pointerBelongings
                        },
                        compute: function() {
                            pointerBelongings = {
                                // keep
                                // keep pointerBelongings
                                knotAtBottomLeft: {y: y0, x: x0},
                                knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                                knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                                knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                            }
                        }
                    }
                }


                let constructFrontKnotFromPointer = function(args) {
                    // let front
                    // let profile
                    let [fromY, fromX] = args

                    let ctx = document.querySelector('#scene').getContext('2d')

                    // keep
                    var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                    // keep

                    let [startingY, startingX] = [100, 100]
                    // keep

                    // keep
                    var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5 * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5 * 0.5), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])

                    fromCtx(ctx).beginPath()

                    fromCtx(ctx).moveTo(y0, x0)
                    fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                    fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                    fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                    /* keep */
                    fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                    fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                    fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                    fromCtx(ctx).lineTo(y0, x0)

                    ctx.stroke()

                    // keep computed

                    let pointerBelongings

                    return {
                        draw: function(){
                            // keep
                        },
                        getPointerBelongings: function() {
                            return pointerBelongings
                        },
                        compute: function() {
                            pointerBelongings = {
                                // keep
                                // keep pointerBelongings
                                knotAtBottomLeft: {y: y0, x: x0},
                                knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                                knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                                knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                            }
                        }
                    }
                }

                // keep
                let pointerBelongings = pointerBelongingsStickdConstructBottom.fromLatest(/* keep */ /* keep 20 */ 100)

                let pointerBelongingsPerspective = pointerBelongingsStickdPerspective.fromLatest(/* keep */ 2)

                var [startingFromWeightY, startingFromWeightX] = [/* keep */ 1, /* keep */ 1]

                var [stepClosing, stepStartingFrom] = [80, 0]


                let originalWeight
                let offerWeight = calc(
                    (pointerBelongingsPerspective[/* keep */ 0].fromY - pointerBelongingsPerspective[/* keep */ 0].knotPerspectiveStartingFromY)
                    -
                    (pointerBelongingsPerspective[/* keep */ 1].fromY - pointerBelongingsPerspective[/* keep */ 1].knotPerspectiveStartingFromY)
                ) / stepClosing



                var pointerBelongingsFromComputed = JSON.parse(JSON.stringify(pointerBelongings))

                // keep computed
                let pointerBelongingsStacked = []

                for(let i = 0; i < pointerBelongingsFromComputed.length; i++) {
                    let originalFromY = pointerBelongingsFromComputed[i].fromY /* keep from-bottom */ - pointerBelongingsFromComputed[i].knotBottomStartingFromY

                    let fromY = originalFromY * offerWeight

                    // keep
                    pointerBelongingsFromComputed[i].fromY = fromY /* keep from-bottom */ + pointerBelongingsFromComputed[i].knotFrontEntireStartingFromY

                    // keep
                    let fromX = pointerBelongingsFromComputed[i].fromX

                    let frontKnot = constructFrontKnotFromPointer([pointerBelongingsFromComputed[i].fromY, fromX])
                    frontKnot.compute()

                    let pointerBelongings = frontKnot.getPointerBelongings()

                    // use #descending-from-the-sun
                    let knotWi = pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                    let knotProfile = pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y

                    pointerBelongingsStacked.push({fromY: pointerBelongingsFromComputed[i].fromY, fromX})

                    constructFrontClosingKnotFromPointer([pointerBelongingsFromComputed[i].fromY - knotProfile, fromX + knotWi * 0.2])
                }

                pointerBelongingsStickdFrontFromKnotStory.fromCompact(pointerBelongingsStacked).bind(/* keep */)


                var [closingWeightY, closingWeightX] = [/* keep */, /* keep */]

                // weighted graph

                // keep
            }
        })

        knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(6).addEventListener('click', function () {
            
        })
        knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(5).addEventListener('click', function () {
            
        })
        knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(4).addEventListener('click', function () {
            let fromCtx = function(ctx) {

                return {
                    moveTo: function(y, x) {
                        return ctx.moveTo(x, y)
                    },
                    lineTo: function(y, x) {
                        return ctx.lineTo(x, y)
                    },

                    beginPath: function() {
                        ctx.beginPath()
                    },

                    // keep
                    useFillStyle: function(fillStyle) {
                        ctx.fillStyle = fillStyle
                    },
                    fill: function() {
                        ctx.fill()
                    }

                }
            }

            let fromPointer = function(args, anotherArgs) {
                // keep
                let [y,x] = args
                let [fromY, fromX] = anotherArgs 
                // keep
                return [
                    y + (fromY),
                    x + (fromX)
                ]
            }

            let constructTerraKnotFromPointer = function(args) {
                // let front
                // let profile
                let [fromY, fromX] = args

                let ctx = document.querySelector('#scene').getContext('2d')

                // keep
                var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                // keep

                let [startingY, startingX] = [100, 100]
                // keep

                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * calc(2) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * calc(2) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5) * 0.5)].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * calc(2) * 1.7 * 0.5 * 0.5 * 0.5) * 0.5)].reverse(), [fromY, fromX])

                fromCtx(ctx).beginPath()
                fromCtx(ctx).useFillStyle("#f0e68cff")

                fromCtx(ctx).moveTo(y0, x0)
                fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                // fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                /* keep */
                // fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                // fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                fromCtx(ctx).lineTo(y0, x0)

                fromCtx(ctx).fill()

                ctx.stroke()

                // keep computed

                let pointerBelongings

                return {
                    draw: function(){
                        // keep
                    },
                    getPointerBelongings: function() {
                        return pointerBelongings
                    },
                    compute: function() {
                        pointerBelongings = {
                            // keep
                            // keep pointerBelongings
                            knotAtBottomLeft: {y: y0, x: x0},
                            knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                            knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                            knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                        }
                    }
                }
            }

            let pointerBelongingsStickd = pointerBelongingsStickdTerra.fromLatest(/* keep */ 10)

            for(let k = 0; k < pointerBelongingsStickd.length; k++) {
                var { fromY, fromX, /* keep */ knotTerraStartingFromY, knotTerraStartingFromX, knotTerraBottomStartingFromY, knotTerraBottomStartingFromX } = pointerBelongingsStickd[k]

                // keep
                fromY = fromY - knotTerraStartingFromX + knotTerraBottomStartingFromX /* keep - knotTerraStartingFromY */ /* + knotTerraBottomStartingFromY */
                fromX = fromX /* keep - knotTerraStartingFromX */ /* + knotTerraBottomStartingFromX */

                let ctx = document.querySelector('#scene').getContext('2d')
                // keep

                let profileKnot = constructTerraKnotFromPointer([fromY, fromX])
                profileKnot.compute()

                let pointerBelongings = profileKnot.getPointerBelongings()

                let [startingY, startingX] = [100, 100]
                // keep
                let knotWi = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                let knotProfile = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y

                pointerBelongingsStickdTerraBottom.fromCompact({fromY, fromX, knotWi, knotProfile}).bind()
            }
            // // keep
            // var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
            // var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((100 + knotWi - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), 100 - startingX].reverse(), [fromY, fromX])
            // var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((100 + knotWi - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 1.4 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])
            // var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 1.4 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])

            // ctx.beginPath()

            // fromCtx(ctx).moveTo(y0 - knotProfile * 0.5 * 0.4, x0 + knotWi * 0.5 * 0.5 * 0.5)
            // fromCtx(ctx).lineTo(knotAtBottomRightY - knotProfile * 0.5 * 0.4, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)

            // // fromCtx(ctx).moveTo(knotAtBottomRightY - knotProfile * 0.5 * 0.4, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)
            // fromCtx(ctx).lineTo(calc(knotAtTopRightY + knotProfile * 0.2 * 0.1), knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)

            // /* keep */
            // // fromCtx(ctx).moveTo(calc(knotAtTopRightY + knotProfile * 0.1), knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)
            // fromCtx(ctx).lineTo(calc(knotAtTopLeftY + knotProfile * 0.2 * 0.1), knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)

            // // fromCtx(ctx).moveTo(calc(knotAtTopLeftY + knotProfile * 0.1), knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)
            // fromCtx(ctx).lineTo(y0 - knotProfile * 0.5 * 0.4, x0 + knotWi * 0.5 * 0.5  * 0.5)

            // ctx.stroke()
        })
        knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(3).addEventListener('click', function () {
            
        })
        knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(2).addEventListener('click', function () {
            // keep

            // keep pointerFromFront
            // keep PointerBelongingsAtKnotBottomStatement

            // keep pointerBelongingsIntoBottomKnot
            // pointerBelongingsStickdBottom.latest(/* keep */ /* Array.from(Array(/* keep */ 4)) */ 4)
            let pointerBelongingsStickdfromLatest = pointerBelongingsStickdBottom.fromLatest(/* keep */ /* Array.from(Array(/* keep ! 4))*/ 4)

            if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(1).getStatus() === 'passedThrough') {
                // keep
                knotSpider.constructReferenceGraph()

                let referenceGraph = knotSpider.retrieveReferenceGraph()
            }
        })
        knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(1).addEventListener('click', function () {
            
        })

        knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(4).addEventListener('click', function () {
            if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep
                let storageInstance = localStorage

                // keep structure from front-statement
                // restore from knot story pointer belongings

                // keep
                let fromProjectionCenter = function(args) {
                    // keep
                    let [y,x] = args
                    return [
                        y + PROJECTION_CENTER_Y,
                        x + PROJECTION_CENTER_X + 50
                    ]
                }
                // keep
                let constructKnotStory = function(args) {
                    let [fromY, fromX] = args

                    var /* keep knot */ [y0, x0] = fromProjectionCenter([100, 100].reverse())
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4), 100].reverse())
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4), calc(200 * 1.7)].reverse())
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7)].reverse())


                    var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 * 0.2 + fromY), 100 + fromX].reverse())
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 * 0.2 + fromY), calc(200 * 1.9 * 1.9 * 0.25 + fromX)].reverse())
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.9 * 1.9 * 0.25 + fromX)].reverse())


                    let ctx = document.querySelector('#scene').getContext('2d')
                    ctx.beginPath()

                    fromCtx(ctx).moveTo(y0, x0)
                    fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                    fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                    fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                    fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                    fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                    fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                    fromCtx(ctx).lineTo(y0, x0)

                    ctx.stroke()


                    // keep computed

                    let pointerBelongings

                    return {
                        draw: function(){
                            // keep
                        },
                        getPointerBelongings: function() {
                            return pointerBelongings
                        },
                        compute: function() {
                            pointerBelongings = {
                                // keep
                                // keep pointerBelongings
                                knotAtBottomLeft: {y: y0, x: x0},
                                knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                                knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                                knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                            }
                        }
                    }
                }

                // keep
                storageBottomStickdFromStory.locateFrom(storageInstance).bind(/* keep */)

                storageStory.locateFrom(storageInstance).bind(/* keep */)

                // keep
                let pointerBelongings = storageStory.fromLatest(/* keep */ 4)

                for(let k = 1; k <= pointerBelongings.length; k++) {
                    let fromY = calc(100  /* keep - 100 - 200 */ - 200 - 200 + 100 * k)
                    let fromX = 200 - 80 + 80 + 50 + /* keep */ + 800 + 400


                    let knotStory = constructKnotStory([fromY, fromX])
                    knotStory.compute()

                    let pointerBelongingsFromFront = knotStory.getPointerBelongings()

                    // keep

                    // use #descending-from-the-sun
                    let knotWi = pointerBelongingsFromFront.knotAtBottomRight.x - pointerBelongingsFromFront.knotAtBottomLeft.x
                    let knotProfile = pointerBelongingsFromFront.knotAtTopLeft.y - pointerBelongingsFromFront.knotAtBottomLeft.y

                    // keep
                    // alert(JSON.stringify({knotWi, knotProfile}))
                    // process.exit()

                    // // keep
                    // alert(JSON.stringify({knotWi, knotProfile, pointerBelongingsFromFront}))

                    // keep structure from front-statement
                    knotStoryPointerBelongings.fromCompact({
                        fromY: pointerBelongingsFromFront.knotAtBottomLeft.y,
                        fromX: pointerBelongingsFromFront.knotAtBottomLeft.x,

                        knotWi,
                        knotProfile
                    }).bind(/* keep */)
                }
                // keep
                // construct
            }
        })


        knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(6).addEventListener('click', function () {
            if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep
                // keep

                let pointerBelongingsFromBottom = pointerBelongingsStickdBottomFromKnotStory.fromLatest(/* keep ! */ 100)
                
                storageBottomStickdFromStory.fromCompact(pointerBelongingsFromBottom).bind(/* keep */)
                storageBottomStickdFromStory.save()
                // keep


                let pointerBelongings = that.descendingFromTheSun(pointerBelongingsStickdFrontFromKnotStory.fromLatest(/* keep */ 1))
                // alert(JSON.stringify(pointerBelongings))

                storageStory.fromCompact(pointerBelongings).bind(/* keep */)
                storageStory.save()
            }
        })
        // from sticked-album-stacked

        // keep
        knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(4).addEventListener('click', function () {
            // keep
            // let pointerBelongingsStickdKnotClosing
            let pointerBelongingsStickdFromLatestChosen = that.descendingFromTheSun(pointerBelongingsStickdKnotClosing.fromLatest(/* keep */1))
            
            if(knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep
                let knotFound = knotLocateStickdKnotClosing.locateFrom(
                    pointerBelongingsStickdFromLatestChosen.y,
                    pointerBelongingsStickdFromLatestChosen.x
                )
                if(knotFound) {
                    // keep
                } else {
                    return /* keep */
                }

                let knotPointerBelongingsFromFront = knotFound

                knotComputed = JSON.parse(JSON.stringify(knotFound))
                knotComputed.spawnedPointerBelongings = JSON.parse(JSON.stringify(knotFound.spawnedPointerBelongings))
                knotComputed.passThrough = knotFound.passThrough

                knotFromChalk = accuratePencil.throughChalk("#008b8b", knotComputed)
                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotFromChalk)

                accuratePencil.draw()
            }
            // highlight
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(3).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(2).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(1).addEventListener('click', function () {

        })
        // keep !
        // put-up-bottom-statement


        // keep
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-knot-from-pointer').at(4).addEventListener('click', function () {
            // keep
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-knot-from-pointer').at(3).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-knot-from-pointer').at(2).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-knot-from-pointer').at(1).addEventListener('click', function () {

        })
        // keep !
        // into-bottom-knot-from-pointer

        // keep
        /*
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(6).addEventListener('click', function () {

        })

        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(5).addEventListener('click', function () {

        })
        */

        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(4).addEventListener('click', function () {
            // keep

            // keep pointerFromFront
            // keep PointerBelongingsAtKnotBottomStatement

            // keep pointerBelongingsIntoBottomKnot
            // pointerBelongingsStickdBottom.latest(/* keep */ /* Array.from(Array(/* keep */ 4)) */ 4)
            let pointerBelongingsStickdfromLatest = pointerBelongingsStickdBottom.fromLatest(/* keep */ /* Array.from(Array(/* keep ! 4))*/ 4)

            if(knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep

                let knotFoundStarting = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[0].y,
                    pointerBelongingsStickdfromLatest[0].x
                )
                if(knotFoundStarting) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep

                let knotFoundAtBottomRight = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[1].y,
                    pointerBelongingsStickdfromLatest[1].x
                )
                if(knotFoundAtBottomRight) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep

                let knotFoundAtTopRight = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[1+1].y,
                    pointerBelongingsStickdfromLatest[1+1].x
                )
                if(knotFoundAtTopRight) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep


                let knotFoundAtTopLeftClosing = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[2+1].y,
                    pointerBelongingsStickdfromLatest[2+1].x
                )
                if(knotFoundAtTopLeftClosing) {
                    // keep
                } else {
                    return /* keep */
                }


                // keep fromBottomStatement, fromFront
                let pointerBelongingsFromFrontStarting = knotFoundStarting.getPointerBelongingsFromFrontStatement()
                let knotPointerBelongingsFromFront = new KnotPointerBelongingsAtKnotBottomStatementFromStacked()
                // keep !

                let pointerBelongingsFromFrontAtBottomRight = knotFoundAtBottomRight.getPointerBelongingsFromFrontStatement()
                // keep

                let pointerBelongingsFromFrontAtTopRight = knotFoundAtTopRight.getPointerBelongingsFromFrontStatement()
                // keep

                let pointerBelongingsFromFrontAtTopLeftClosing = knotFoundAtTopLeftClosing.getPointerBelongingsFromFrontStatement()
                // keep


                let pointerBelongingsAtKnotFromFrontStatement = new PointerBelongingsAtKnotBottomStatement()
                pointerBelongingsAtKnotFromFrontStatement.assignCoordinates(
                    pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.x,

                    pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.x,

                    pointerBelongingsFromFrontAtTopRight.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontAtTopRight.pointerBelongings.pointerBelongingsAtTopLeft.x,

                    pointerBelongingsFromFrontAtTopLeftClosing.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontAtTopLeftClosing.pointerBelongings.pointerBelongingsAtTopLeft.x
                )
                // keep

                pointerBelongingsAtKnotFromFrontStatement.useKnotRelativeSize(that.knotRelativeSize)
                pointerBelongingsAtKnotFromFrontStatement.useKnot(knotPointerBelongingsFromFront)
                // keep
                pointerBelongingsAtKnotFromFrontStatement.compute()
                
                // keep   


                // y, x, throughY, throughX
                let pointerBelongings = knotFoundStarting.spawnedPointerBelongings


                // constructIncreaserPointerFromPointerBelongingsFromFront
                pointerBelongings.yStarting = pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.xStarting = pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.x

                // keep
                pointerBelongings.yBottomRight = pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.xBottomRight = pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.x
                // keep

                // pointerBelongings.yClosing = pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.y
                // pointerBelongings.xClosing = pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.x



                pointerBelongings.yTopRight = pointerBelongingsFromFrontAtTopRight.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.xTopRight = pointerBelongingsFromFrontAtTopRight.pointerBelongings.pointerBelongingsAtTopLeft.x

                pointerBelongings.yTopLeftClosing = pointerBelongingsFromFrontAtTopLeftClosing.pointerBelongings.pointerBelongingsAtTopLeft.y 
                pointerBelongings.xTopLeftClosing = pointerBelongingsFromFrontAtTopLeftClosing.pointerBelongings.pointerBelongingsAtTopLeft.x


                pointerBelongings.knotAtProfile = that.descendingFromTheSun([pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y, pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.knotWi = that.descendingFromTheSun([pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.x, pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomRight.x]) - pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.x


                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongingsFromFront.throughSpawnedPointerBelongings(pointerBelongings))
                accuratePencil.draw()
            }
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(3).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(2).addEventListener('click', function () {
            if(knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep pointerFromFront
                // keep pointerBelongingsAtKnotFromBottomStatement

                let knotFound = knotLocateStickd.locateFrom(
                    pointerBelongingsStickd.spawnedPointerBelongings.y,
                    pointerBelongingsStickd.spawnedPointerBelongings.x
                )
                if(knotFound) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep

                // keep fromBottomStatement, fromFront
                let pointerBelongingsFromFront = knotFound.getPointerBelongingsFromFrontStatement()
                let knotPointerBelongingsFromDoubleStacked = new KnotDoubleStackedPointer()
                // keep !

                let pointerBelongingsAtKnotFromFrontStatement = new PointerBelongingsAtKnotDoubleStacked()
                pointerBelongingsAtKnotFromFrontStatement.assignCoordinates(
                    pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.x
                )
                // keep

                pointerBelongingsAtKnotFromFrontStatement.useKnotRelativeSize(that.knotRelativeSize)
                pointerBelongingsAtKnotFromFrontStatement.useKnot(knotPointerBelongingsFromDoubleStacked)
                // keep
                pointerBelongingsAtKnotFromFrontStatement.compute()

                // keep !

                knotPointerBelongingsFromDoubleStacked.throughConstructedPointerBelongings(knotFound.spawnedPointerBelongings)
                knotPointerBelongingsFromDoubleStacked.compute()

                knotPointerBelongingsFromDoubleStacked.throughConstructedPointerBelongings(knotFound.spawnedPointerBelongings)
                knotPointerBelongingsFromDoubleStacked.computeFromFront()

                let pointerBelongingsFromFrontFromDoubleStacked = knotPointerBelongingsFromDoubleStacked.getPointerBelongingsFromFrontStatement()


                let knotPointerBelongingsFromComputed = knotPointerBelongingsFromDoubleStacked
                knotPointerBelongingsFromDoubleStacked.assignReferenceKnot(knotFound)

                knotLocateStickdBottom.put(pointerBelongingsFromFrontFromDoubleStacked.pointerBelongings, knotPointerBelongingsFromDoubleStacked)


                let pointerBelongings = knotFound.spawnedPointerBelongings
                pointerBelongings.knotAtProfile = that.descendingFromTheSun([pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y, pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y

                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongingsFromDoubleStacked.throughSpawnedPointerBelongings(pointerBelongings))
                accuratePencil.draw()
            }
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(1).addEventListener('click', function () {

        })
        // keep !
        // into-knot


        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(6).addEventListener('click', function () {
            // keep
            if(knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).getStatus() === 'passedThrough') {
                // keep pointerFromFront
                // keep pointerBelongingsAtKnotFromBottomStatement

                // keep pointerBelongingsAtKnotProfile


                let pointerBelongingsStickdfromLatest = pointerBelongingsStickdBottom.fromLatest(/* Array(Array.from(2)) */ 2)

                let knotFoundStarting = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[0].y,
                    pointerBelongingsStickdfromLatest[0].x
                )
                if(knotFoundStarting) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep


                let knotFoundClosing = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[1].y,
                    pointerBelongingsStickdfromLatest[1].x
                )
                if(knotFoundClosing) {
                    // keep
                } else {
                    return /* keep */
                }


                // keep fromBottomStatement, fromFront
                let pointerBelongingsFromFrontStarting = knotFoundStarting.getPointerBelongingsFromFrontStatement()
                let knotPointerBelongingsFromFront = new KnotPointerBelongingsFromProfileFromStacked()
                // keep !

                let pointerBelongingsFromFrontClosing = knotFoundClosing.getPointerBelongingsFromFrontStatement()
                

                let pointerBelongingsAtKnotFromFrontStatement = new PointerBelongingsAtKnotFront()
                pointerBelongingsAtKnotFromFrontStatement.assignCoordinates(
                    pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.x,

                    pointerBelongingsFromFrontClosing.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontClosing.pointerBelongings.pointerBelongingsAtTopLeft.x
                )
                // keep

                pointerBelongingsAtKnotFromFrontStatement.useKnotRelativeSize(that.knotRelativeSize)
                pointerBelongingsAtKnotFromFrontStatement.useKnot(knotPointerBelongingsFromFront)
                // keep
                pointerBelongingsAtKnotFromFrontStatement.compute()
                
                // keep   


                // y, x, throughY, throughX
                let pointerBelongings = knotFoundStarting.spawnedPointerBelongings


                // constructIncreaserPointerFromPointerBelongingsFromFront
                pointerBelongings.yStarting = pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.xStarting = pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.x

                pointerBelongings.yClosing = pointerBelongingsFromFrontClosing.pointerBelongings.pointerBelongingsAtTopLeft.y 
                pointerBelongings.xClosing = pointerBelongingsFromFrontClosing.pointerBelongings.pointerBelongingsAtTopLeft.x


                pointerBelongings.knotAtProfile = that.descendingFromTheSun([pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y, pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.knotWi = that.descendingFromTheSun([pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.x, pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomRight.x]) - pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.x


                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongingsFromFront.throughSpawnedPointerBelongings(pointerBelongings))
                accuratePencil.draw()

                return /* keep */
            }

        })
        // keep
        // knot-profile
        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(5).addEventListener('click', function () {
            // knot-profile

            // pointerBelongingsStickd.spawnedPointerBelongings.pointerBelongings.pointerBelongingsAtTopRight
            // pointerBelongingsStickd.spawnedPointerBelongings.pointerBelongings.pointerBelongingsAtTopLeft

            // knotFoundFrom
            // knotFoundTo


            // knotAtDebth

            // knotDistanceAtFront
            // knotProfile

            // pointerBelongingsStickdBottom.fromLatest(/* Array(Array.from(2)) */)


            // keep

            if(knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).getStatus() === 'passedThrough') {
                // keep

                // keep pointerFromFront
                // keep pointerBelongingsAtKnotFromBottomStatement


                let pointerBelongingsStickdfromLatest = pointerBelongingsStickdBottom.fromLatest(/* Array(Array.from(2)) */ 2)

                let knotFoundStarting = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[0].y,
                    pointerBelongingsStickdfromLatest[0].x
                )
                if(knotFoundStarting) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep


                let knotFoundClosing = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[1].y,
                    pointerBelongingsStickdfromLatest[1].x
                )
                if(knotFoundClosing) {
                    // keep
                } else {
                    return /* keep */
                }


                // keep fromBottomStatement, fromFront
                let pointerBelongingsFromFrontStarting = knotFoundStarting.getPointerBelongingsFromFrontStatement()
                let knotPointerBelongingsFromFront = new KnotPointerBelongingsFromFrontFromStacked()
                // keep !

                let pointerBelongingsFromFrontClosing = knotFoundClosing.getPointerBelongingsFromFrontStatement()
                

                let pointerBelongingsAtKnotFromFrontStatement = new PointerBelongingsAtKnotFront()
                pointerBelongingsAtKnotFromFrontStatement.assignCoordinates(
                    pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.x,

                    pointerBelongingsFromFrontClosing.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontClosing.pointerBelongings.pointerBelongingsAtTopLeft.x
                )
                // keep

                pointerBelongingsAtKnotFromFrontStatement.useKnotRelativeSize(that.knotRelativeSize)
                pointerBelongingsAtKnotFromFrontStatement.useKnot(knotPointerBelongingsFromFront)
                // keep
                pointerBelongingsAtKnotFromFrontStatement.compute()

                // keep !

                /*
                knotPointerBelongingsFromDoubleStacked.throughConstructedPointerBelongings(knotFoundStarting.spawnedPointerBelongings)
                knotPointerBelongingsFromDoubleStacked.compute()

                knotPointerBelongingsFromDoubleStacked.throughConstructedPointerBelongings(knotFoundStarting.spawnedPointerBelongings)
                knotPointerBelongingsFromDoubleStacked.computeFromFront()
                */


                // let pointerBelongingsFromFrontFromDoubleStacked = knotPointerBelongingsFromDoubleStacked.getPointerBelongingsFromFrontStatement()


                // y, x, throughY, throughX
                let pointerBelongings = knotFoundStarting.spawnedPointerBelongings


                // constructIncreaserPointerFromPointerBelongingsFromFront
                pointerBelongings.yStarting = pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.xStarting = pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.x

                pointerBelongings.yClosing = pointerBelongingsFromFrontClosing.pointerBelongings.pointerBelongingsAtTopLeft.y 
                pointerBelongings.xClosing = pointerBelongingsFromFrontClosing.pointerBelongings.pointerBelongingsAtTopLeft.x


                pointerBelongings.knotAtProfile = that.descendingFromTheSun([pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y, pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.knotWi = that.descendingFromTheSun([pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.x, pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomRight.x]) - pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.x
                // keep
                // pointerBelongings.knotAtDebth = that.descendingFromTheSun([knotFoundStarting.pointerBelongings.pointerBelongingsAtBottomLeft])

                // pointerBelongings.knotDistanceAtFront

                // pointerBelongings.knotAtProfile = that.descendingFromTheSun([pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y, pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y

                
                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongingsFromFront.throughSpawnedPointerBelongings(pointerBelongings))
                accuratePencil.draw()

                // new KnotPointerBelongingsFromBottomStatement
            }


        })

        // knot-front
        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(4).addEventListener('click', function () {
            // knot-front

            // pointerBelongingsStickd.spawnedPointerBelongings.pointerBelongings.pointerBelongingsAtTopRight
            // pointerBelongingsStickd.spawnedPointerBelongings.pointerBelongings.pointerBelongingsAtTopLeft

            // pointerBelongingsStickdBottom.fromLatest(/* Array(Array.from(2)) */)

            // knotFoundFrom
            // knotFoundTo

            // knotFront

            // keep
            // pointerBelongings.knotWi


            // pointerBelongings.fromY
            // pointerBelongings.fromX

            // keep
            // pointerBelongings.throughY
            // pointerBelongings.throughX

            // compute front try, deTry use pointerBelongings.fromX, pointerBelongings.throughX
            // from front use
            //      pointerBelongings.fromY, pointerBelongings.fromX,
            //      pointerBelongings.throughY, pointerBelongings.throughX
            // from original, from spawned

            // pass front use increaser from spawned

            // keep spawned try, deTry use pointerBelongings.fromY, pointerBelongings.fromX
            // keep original try, deTry use pointerBelongings.fromY, pointerBelongings.fromX

            // accuratePencil.rememberSample
            // accuratePencil.draw
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(/* keep */ 3 /* keep */).addEventListener('click', function () {
            // keep
            // that's program, knot human
            if(knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).getStatus() === 'passedThrough') {
                // keep
                // keep pointerFromProfile
                // keep pointerBelongingsAtKnotFromBottomStatement

                // keep

                let knotFound = knotLocateStickd.locateFrom(
                    pointerBelongingsStickd.spawnedPointerBelongings.y,
                    pointerBelongingsStickd.spawnedPointerBelongings.x
                )
                if(knotFound) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep

                // keep fromBottomStatement, fromFront
                let pointerBelongingsFromFront = knotFound.getPointerBelongingsFromFrontStatement()
                let knotPointerBelongingsFromProfile = new KnotPointerBelongingsFromProfileStatement()
                // keep !

                // keep !
                let pointerBelongingsAtKnotFromFrontStatement = new PointerBelongingsAtKnotFromProfileStatement()
                pointerBelongingsAtKnotFromFrontStatement.assignCoordinates(
                    pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.x
                )
                // keep

                pointerBelongingsAtKnotFromFrontStatement.useKnotRelativeSize(that.knotRelativeSize)
                pointerBelongingsAtKnotFromFrontStatement.useKnot(knotPointerBelongingsFromProfile)
                // keep
                pointerBelongingsAtKnotFromFrontStatement.compute()

                // keep !

                let pointerBelongings = knotFound.spawnedPointerBelongings
                // keep !

                // keep
                knotPointerBelongingsFromProfile.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongingsFromProfile.compute()
                // keep !

                // keep !
                pointerBelongings.knotAtProfile = that.descendingFromTheSun([pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y, pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y

                // keep
                let knotAtDistanceX = that.descendingFromTheSun([knotPointerBelongingsFromProfile.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x, knotPointerBelongingsFromProfile.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight.x]) - knotPointerBelongingsFromProfile.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x
                // keep
                // pointerBelongings.knotAtProfileWi

                // keep
                // knotPointerBelongingsFromProfile.throughConstructedPointerBelongings(pointerBelongings)
                // knotPointerBelongingsFromProfile.computeFromFront()
                // keep !

                pointerBelongings.knotWi = that.descendingFromTheSun([pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtBottomLeft.x, pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtBottomRight.x]) - pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtBottomLeft.x
                // keep

                // let pointerBelongingsFromKnotRelativeSizeFromFront = that.knotRelativeSize.getPointerBelongingsFromFrontStatement()
                // pointerBelongings.knotRelativeSizeWi = that.descendingFromTheSun([pointerBelongingsFromKnotRelativeSizeFromFront.pointerBelongingsAtBottomLeft.x, pointerBelongingsFromKnotRelativeSizeFromFront.pointerBelongingsAtBottomRight.x]) - pointerBelongingsFromKnotRelativeSizeFromFront.pointerBelongingsAtBottomLeft.x

                // console.log(pointerBelongings.knotRelativeSizeWi)
                // process.exit()

                let knotPointerBelongingsFromProfileWi

                let knotFromComputed = {
                    /* x */ /* keep */ /* computed based on knot , throughX */
                }
                pointerBelongings.knotFromComputed = knotFromComputed

                // knot.pointerBelongingsAtBottomLeft

                // relativeSize

                // knotWi \increaser
                // knotPointerBelongingsFromProfileWi \increaser

                // knotWi , knotPointerBelongingsFromProfileWi < knot\+1 + knotPointerBelongingsFromProfileWi
                // knotWi , knotPointerBelongingsFromProfileWi < /* keep y */ knotFromComputed.x + knotWi

                // double declaration
                // double restriction
                // knotWi , knotPointerBelongingsFromProfileWi < knot\+1 + knotPointerBelongingsFromProfileWi
                // knotWi , knotPointerBelongingsFromProfileWi < /* keep y */ knot.pointerBelongingsAtBottomLeft.x + knotWi

                // keep !
                pointerBelongings.throughKnotAtProfile = {
                    knotAtDistanceX: knotAtDistanceX
                }

                // knotWi
                // knotPointerBelongingsFromProfileWi
                // knotRelativeSizeWi

                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongingsFromProfile.throughSpawnedPointerBelongings(pointerBelongings))
                accuratePencil.draw()

                // new KnotPointerBelongingsFromBottomStatement
            }
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(2).addEventListener('click', function () {
            // keep

            // that's program, knot human
            if(knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).getStatus() === 'passedThrough') {
                // keep

                // keep pointerFromFront
                // keep pointerBelongingsAtKnotFromBottomStatement

                let knotFound = knotLocateStickd.locateFrom(
                    pointerBelongingsStickd.spawnedPointerBelongings.y,
                    pointerBelongingsStickd.spawnedPointerBelongings.x
                )
                if(knotFound) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep

                // keep fromBottomStatement, fromFront
                let pointerBelongingsFromFront = knotFound.getPointerBelongingsFromFrontStatement()
                let knotPointerBelongingsFromFront = new KnotPointerBelongingsFromFrontStatement()
                // keep !

                let pointerBelongingsAtKnotFromFrontStatement = new PointerBelongingsAtKnotFromFrontStatement()
                pointerBelongingsAtKnotFromFrontStatement.assignCoordinates(
                    pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.x
                )
                // keep

                pointerBelongingsAtKnotFromFrontStatement.useKnotRelativeSize(that.knotRelativeSize)
                pointerBelongingsAtKnotFromFrontStatement.useKnot(knotPointerBelongingsFromFront)
                // keep
                pointerBelongingsAtKnotFromFrontStatement.compute()

                // keep !

                let pointerBelongings = knotFound.spawnedPointerBelongings
                pointerBelongings.knotAtProfile = that.descendingFromTheSun([pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y, pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - pointerBelongingsFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y

                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongingsFromFront.throughSpawnedPointerBelongings(pointerBelongings))
                accuratePencil.draw()


                let providedY = knotFound.spawnedPointerBelongings.y
                let providedX = knotFound.spawnedPointerBelongings.x

                // keep
                let pointerBelongingsFromCubicFromFront = knotPointerBelongingsFromFront.getPointerBelongingsFromFrontStatement()

                // keep
                knotPointerBelongingsFromFront.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongingsFromFront.compute()

                knotPointerBelongingsFromFront.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongingsFromFront.computeFromFront()                

                let knotPointerBelongingsFromFrontFromFrontStatement = knotPointerBelongingsFromFront.getPointerBelongingsFromFrontStatement()

                let knotPointerBelongingsFromFrontComputed = knotPointerBelongingsFromFrontFromFrontStatement

                // keep
                pointerBelongingsFrontStackdStickd.fromCompact(/* keep pointerBelongingsAtKnotLocateFromComputed.pointerBelongings */ {y: providedY, x: providedX}).bind()

                knotLocateDraftarKnotPointerBelongings.put(knotPointerBelongingsFromFrontFromFrontStatement.pointerBelongings, knotPointerBelongingsFromFrontComputed)

                // new KnotPointerBelongingsFromBottomStatement
            }
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).addEventListener('click', function () {

        })
        // keep
        // from-pointer-belongings

        // keep
        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(6).addEventListener('click', function () {
            // keep

            // keep pointerFromFront
            // keep PointerBelongingsAtKnotBottomStatement

            // keep pointerBelongingsIntoBottomKnot
            // pointerBelongingsStickdBottom.latest(/* keep */ /* Array.from(Array(/* keep */ 4)) */ 4)
            let pointerBelongingsStickdfromLatest = pointerBelongingsStickdBottom.fromLatest(/* keep */ /* Array.from(Array(/* keep ! 4))*/ 4)

            if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep

                let knotFoundStarting = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[0].y,
                    pointerBelongingsStickdfromLatest[0].x
                )
                if(knotFoundStarting) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep

                let knotFoundAtBottomRight = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[1].y,
                    pointerBelongingsStickdfromLatest[1].x
                )
                if(knotFoundAtBottomRight) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep

                let knotFoundAtTopRight = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[1+1].y,
                    pointerBelongingsStickdfromLatest[1+1].x
                )
                if(knotFoundAtTopRight) {
                    // keep
                } else {
                    return /* keep */
                }
                // keep


                let knotFoundAtTopLeftClosing = knotLocateStickdBottom.locateFrom(
                    pointerBelongingsStickdfromLatest[2+1].y,
                    pointerBelongingsStickdfromLatest[2+1].x
                )
                if(knotFoundAtTopLeftClosing) {
                    // keep
                } else {
                    return /* keep */
                }


                // keep fromBottomStatement, fromFront
                let pointerBelongingsFromFrontStarting = knotFoundStarting.getPointerBelongingsFromFrontStatement()
                let knotPointerBelongingsFromFront = new KnotPointerBelongingsAtKnotCubicFromStacked()
                // keep !

                let pointerBelongingsFromFrontAtBottomRight = knotFoundAtBottomRight.getPointerBelongingsFromFrontStatement()
                // keep

                let pointerBelongingsFromFrontAtTopRight = knotFoundAtTopRight.getPointerBelongingsFromFrontStatement()
                // keep

                let pointerBelongingsFromFrontAtTopLeftClosing = knotFoundAtTopLeftClosing.getPointerBelongingsFromFrontStatement()
                // keep


                let pointerBelongingsAtKnotFromFrontStatement = new PointerBelongingsAtKnotCubic()
                pointerBelongingsAtKnotFromFrontStatement.assignCoordinates(
                    pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.x,

                    pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.x,

                    pointerBelongingsFromFrontAtTopRight.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontAtTopRight.pointerBelongings.pointerBelongingsAtTopLeft.x,

                    pointerBelongingsFromFrontAtTopLeftClosing.pointerBelongings.pointerBelongingsAtTopLeft.y,
                    pointerBelongingsFromFrontAtTopLeftClosing.pointerBelongings.pointerBelongingsAtTopLeft.x
                )
                // keep

                pointerBelongingsAtKnotFromFrontStatement.useKnotRelativeSize(that.knotRelativeSize)
                pointerBelongingsAtKnotFromFrontStatement.useKnot(knotPointerBelongingsFromFront)
                // keep
                pointerBelongingsAtKnotFromFrontStatement.compute()
                
                // keep   


                // y, x, throughY, throughX
                let pointerBelongings = knotFoundStarting.spawnedPointerBelongings


                // constructIncreaserPointerFromPointerBelongingsFromFront
                pointerBelongings.yStarting = pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.xStarting = pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.x

                // keep
                pointerBelongings.yBottomRight = pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.xBottomRight = pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.x
                // keep

                // pointerBelongings.yClosing = pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.y
                // pointerBelongings.xClosing = pointerBelongingsFromFrontAtBottomRight.pointerBelongings.pointerBelongingsAtTopLeft.x



                pointerBelongings.yTopRight = pointerBelongingsFromFrontAtTopRight.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.xTopRight = pointerBelongingsFromFrontAtTopRight.pointerBelongings.pointerBelongingsAtTopLeft.x

                pointerBelongings.yTopLeftClosing = pointerBelongingsFromFrontAtTopLeftClosing.pointerBelongings.pointerBelongingsAtTopLeft.y 
                pointerBelongings.xTopLeftClosing = pointerBelongingsFromFrontAtTopLeftClosing.pointerBelongings.pointerBelongingsAtTopLeft.x


                pointerBelongings.knotAtProfile = that.descendingFromTheSun([pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y, pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongings.knotWi = that.descendingFromTheSun([pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.x, pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomRight.x]) - pointerBelongingsFromFrontStarting.pointerBelongings.pointerBelongingsAtBottomLeft.x


                knotPointerBelongingsFromFront.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongingsFromFront.compute()

                // keep
                knotPointerBelongingsFromFront.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongingsFromFront.computeFromFront()

                // keep
                let pointerBelongingsFromFront = knotPointerBelongingsFromFront.getPointerBelongingsFromFrontStatement()
                
                let knotPointerBelongingsFromComputed = knotPointerBelongingsFromFront


                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongingsFromFront.throughSpawnedPointerBelongings(pointerBelongings))
                accuratePencil.draw()


                let providedY = pointerBelongings.yStarting
                let providedX = pointerBelongings.xStarting

                let pointerBelongingsFromCubicFromFront = knotPointerBelongingsFromFront.getPointerBelongingsFromFrontStatement()

                // keep
                pointerBelongingsStickdKnotClosing.fromCompact(/* keep pointerBelongingsAtKnotLocateFromComputed.pointerBelongings */ {y: providedY, x: providedX}).bind()

                knotLocateStickdKnotClosing.put(pointerBelongingsFromCubicFromFront.pointerBelongings, knotPointerBelongingsFromComputed)
            }
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(5).addEventListener('click', function () {

        })

        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(4).addEventListener('click', function () {
            
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(3).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(2).addEventListener('click', function () {
            // keep
            // use connected knotLocate
            // dcsTar.rememberSample pointer-from-front
            // dcsTar.draw
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).addEventListener('click', function () {
            // keep
        })
        // keep !
        // from-bottom-statement

        // keep !
        knotFromBottomStatement.ctx.addEventListener('click', function (event) {
            let providedY = event.clientY
            let providedX = event.clientX

            // traversar sends straight request
            // and receives flipped request

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            // keep hub

            // into-bottom-knot-from-pointer

            // keep
            let PROJECTION_CENTER_Y = /* keep 250 */ 100
            let PROJECTION_CENTER_X = 100

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
            let fromPointer = function(args, anotherArgs) {
                // keep
                let [y,x] = args
                let [fromY, fromX] = anotherArgs 
                // keep
                return [
                    y + (fromY),
                    x + (fromX)
                ]
            }
            // keep calc

            var /* keep knot */ [y0, x0] = fromProjectionCenter([100, 100].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4), 100].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4), calc(200 * 1.7)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7)].reverse())

            // keep
            // var fromY = event.clientY - knotFromBottomStatement.ctx.offsetTop
            // var fromX = event.clientX - knotFromBottomStatement.ctx.offsetLeft

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft

            let fromCtx = function(ctx) {

                return {
                    moveTo: function(y, x) {
                        return ctx.moveTo(x, y)
                    },
                    lineTo: function(y, x) {
                        return ctx.lineTo(x, y)
                    },

                    beginPath: function() {
                        ctx.beginPath()
                    },

                    // keep
                    useFillStyle: function(fillStyle) {
                        ctx.fillStyle = fillStyle
                    },
                    fill: function() {
                        ctx.fill()
                    }

                }
            }
            // alert(JSON.stringify({fromY, fromX}))
            // alert(JSON.stringify({x0, knotAtBottomRightX, y0, knotAtTopLeftY}))


            var fromY = calc(100 - 100 - 100 - 40)
            var fromX = 200 + 100 + 100


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft

            characterCircuitStickd.push({fromY, fromX})
            console.log(characterCircuitStickd)
            process.exit()


            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                // document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed').onupload = function(event){
                //     console.log(event)

                //     process.exit()
                // }
                let takeOne = function(/* keep */ arr) {
                    return arr[0]
                }
                let fromKnotInput = function(knotInput) {

                    knotInput.oninput = function(event, file) {
                        // keep
                        let knotFile = takeOne(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-construction-perspective').files)

                        // keep
                        document.querySelector('.knot-from-construction-perspective').src = URL.createObjectURL(knotFile) 

                        // keep
                    }
                }

                fromKnotInput(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-construction-perspective'))


                document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-construction-perspective').click()

                return
            }
            // keep from construction-viewport


            var fromY = calc(100 - 100 - 100 - 40)
            var fromX = 400 /* keep */ + 100 + 50 + 100


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft


            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                // document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed').onupload = function(event){
                //     console.log(event)

                //     process.exit()
                // }
                let takeOne = function(/* keep */ arr) {
                    return arr[0]
                }
                let fromKnotInput = function(knotInput) {

                    knotInput.oninput = function(event, file) {
                        // keep
                        let knotFile = takeOne(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-construction-viewport').files)

                        // keep
                        document.querySelector('.knot-from-construction-viewport').src = URL.createObjectURL(knotFile) 

                        // keep
                    }
                }

                fromKnotInput(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-construction-viewport'))


                document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-construction-viewport').click()

                return
            }
            // keep from construction-viewport


            var fromY = calc(100 - 100 - 100 - 40)
            var fromX = 800 + 100


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft


            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                // document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed').onupload = function(event){
                //     console.log(event)

                //     process.exit()
                // }
                let takeOne = function(/* keep */ arr) {
                    return arr[0]
                }
                let fromKnotInput = function(knotInput) {

                    knotInput.oninput = function(event, file) {
                        // keep
                        let knotFile = takeOne(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-viewported-map').files)

                        // keep
                        document.querySelector('.knot-from-viewported-map').src = URL.createObjectURL(knotFile) 

                        // keep
                    }
                }

                fromKnotInput(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-viewported-map'))


                document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-viewported-map').click()

                return
            }
            // keep from viewported-map



            var fromY = calc(100 - 100 - 100 - 40)
            var fromX = 1000 + 50 + 100


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft


            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                // document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed').onupload = function(event){
                //     console.log(event)

                //     process.exit()
                // }
                let takeOne = function(/* keep */ arr) {
                    return arr[0]
                }
                let fromKnotInput = function(knotInput) {

                    knotInput.oninput = function(event, file) {
                        // keep
                        let knotFile = takeOne(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-character').files)

                        // keep
                        document.querySelector('.knot-from-character-flipped').src = URL.createObjectURL(knotFile) 

                        // keep
                    }
                }

                fromKnotInput(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-character'))


                document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-character').click()

                return
            }
            // keep from character


            let constructKnotFromProfileKnotFromPointer = function() {

            }

            let constructProfileKnotFromPointer = function(args) {
                // let front
                // let profile
                let [fromY, fromX] = args

                let ctx = document.querySelector('#scene').getContext('2d')

                // keep
                var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                // keep

                let [startingY, startingX] = [100, 100]
                // keep

                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])


                fromCtx(ctx).moveTo(y0, x0)
                fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                /* keep */
                fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                fromCtx(ctx).lineTo(y0, x0)

                ctx.stroke()

                // keep computed

                let pointerBelongings

                return {
                    draw: function(){
                        // keep
                    },
                    getPointerBelongings: function() {
                        return pointerBelongings
                    },
                    compute: function() {
                        pointerBelongings = {
                            // keep
                            // keep pointerBelongings
                            knotAtBottomLeft: {y: y0, x: x0},
                            knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                            knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                            knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                        }
                    }
                }
            }

            let constructPerspectiveKnotFromPointer = function(args) {
                // let front
                // let profile
                let [fromY, fromX] = args

                let ctx = document.querySelector('#scene').getContext('2d')

                // keep
                var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                // keep

                let [startingY, startingX] = [100, 100]
                // keep


                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * 2 * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * 2 * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])


                fromCtx(ctx).beginPath()
                fromCtx(ctx).useFillStyle("#98fb98")
                
                fromCtx(ctx).moveTo(y0, x0 - startingX * 0.4)
                fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                // fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                // keep 
                // fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX - startingX * 0.4)

                // fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX- startingX * 0.4)
                fromCtx(ctx).lineTo(y0, x0 - startingX * 0.4)

                fromCtx(ctx).fill()

                ctx.stroke()
                // keep !

                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * 2 * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * 2 * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])

                fromCtx(ctx).beginPath()
                fromCtx(ctx).useFillStyle("#98fb98")
                fromCtx(ctx).moveTo(y0, x0)
                fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                // fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                /* keep */
                // fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                // fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                fromCtx(ctx).lineTo(y0, x0)

                fromCtx(ctx).fill()

                ctx.stroke()


                // keep


                // keep computed

                let pointerBelongings

                return {
                    draw: function(){
                        // keep
                    },
                    getPointerBelongings: function() {
                        return pointerBelongings
                    },
                    compute: function() {
                        pointerBelongings = {
                            // keep
                            // keep pointerBelongings
                            knotAtBottomLeft: {y: y0, x: x0},
                            knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                            knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                            knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                        }
                    }
                }
            }

            let constructTerraBottomKnotFromPointer = function(args) {
                // let front
                // let profile
                let [fromY, fromX, closingY, closingX] = args

                let ctx = document.querySelector('#scene').getContext('2d')

                // keep
                var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                // keep

                let [startingY, startingX] = [100, 100]
                // keep

                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * calc(2) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * calc(2) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * calc(2) * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])

                fromCtx(ctx).beginPath()
                fromCtx(ctx).useFillStyle("#f5f5dcff")

                fromCtx(ctx).moveTo(y0, x0)
                fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                // fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                fromCtx(ctx).lineTo(closingY, closingX)

                /* keep */
                // fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                fromCtx(ctx).lineTo(closingY, /* keep knotAtTopLeftX */ /* keep */ x0)

                // fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                fromCtx(ctx).lineTo(y0, x0)

                fromCtx(ctx).fill()

                ctx.stroke()

                // keep computed

                let pointerBelongings

                return {
                    draw: function(){
                        // keep
                    },
                    getPointerBelongings: function() {
                        return pointerBelongings
                    },
                    compute: function() {
                        pointerBelongings = {
                            // keep
                            // keep pointerBelongings
                            knotAtBottomLeft: {y: y0, x: x0},
                            knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                            knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                            knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                        }
                    }
                }
            }

            let constructTerraKnotFromPointer = function(args) {
                // let front
                // let profile
                let [fromY, fromX] = args

                let ctx = document.querySelector('#scene').getContext('2d')

                // keep
                var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                // keep

                let [startingY, startingX] = [100, 100]
                // keep

                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * calc(2) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * calc(2) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * calc(2) * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])

                fromCtx(ctx).beginPath()
                fromCtx(ctx).useFillStyle("#f0e68cff")

                fromCtx(ctx).moveTo(y0, x0)
                fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                // fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                /* keep */
                // fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                // fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                fromCtx(ctx).lineTo(y0, x0)

                fromCtx(ctx).fill()

                ctx.stroke()

                // keep computed

                let pointerBelongings

                return {
                    draw: function(){
                        // keep
                    },
                    getPointerBelongings: function() {
                        return pointerBelongings
                    },
                    compute: function() {
                        pointerBelongings = {
                            // keep
                            // keep pointerBelongings
                            knotAtBottomLeft: {y: y0, x: x0},
                            knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                            knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                            knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                        }
                    }
                }
            }


            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                let ctx = document.querySelector('#scene').getContext('2d')
                // keep

                let profileKnot = constructProfileKnotFromPointer([fromY, fromX])
                profileKnot.compute()

                let pointerBelongings = profileKnot.getPointerBelongings()

                let [startingY, startingX] = [100, 100]
                // keep
                let knotWi = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                let knotProfile = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y

                console.log(pointerBelongings)
                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((100 + knotWi - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((100 + knotWi - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])

                fromCtx(ctx).moveTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5 * 0.5)
                fromCtx(ctx).lineTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)

                fromCtx(ctx).moveTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)

                /* keep */
                fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)

                fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5  * 0.5)

                ctx.stroke()
                
                return
            }


            // keep
            var /* keep knot */ [y0, x0] = fromProjectionCenter([100, 100].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4), 100].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4), calc(200 * 1.7)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7)].reverse())


            var fromY = /* keep calc(100 - 100) */ calc(100 - 100)
            var fromX = /* keep 250 */ 250 /* keep */ + 400 + 200 /* keep */ + 800 + 400


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())


            var knotFrontStartingFromY = fromY
            var knotFrontStartingFromX = fromX

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft


            let knotStoryPointerBelongingsFromLatest = knotStoryPointerBelongings.fromLatest(/* keep */ 4)
            if(knotStoryPointerBelongingsFromLatest.length) {

                // keep structure from front-statement

                // keep pointer belongings from front from knot story
                // keep pointer belongings from bottom from knot story

                let fromCtx = function(ctx) {

                    return {
                        moveTo: function(y, x) {
                            return ctx.moveTo(x, y)
                        },
                        lineTo: function(y, x) {
                            return ctx.lineTo(x, y)
                        },

                        beginPath: function() {
                            ctx.beginPath()
                        },

                        // keep
                        useFillStyle: function(fillStyle) {
                            ctx.fillStyle = fillStyle
                        },
                        fill: function() {
                            ctx.fill()
                        }

                    }
                }


                let fromPointer = function(args, anotherArgs) {
                    // keep
                    let [y,x] = args
                    let [fromY, fromX] = anotherArgs 
                    // keep
                    return [
                        y + (fromY),
                        x + (fromX)
                    ]
                }


                let constructFrontClosingKnotFromPointer = function(args) {
                    // let front
                    // let profile
                    let [fromY, fromX, knotWi, knotProfile] = args

                    let ctx = document.querySelector('#scene').getContext('2d')

                    // keep
                    var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                    // keep

                    let [startingY, startingX] = [100, 100]
                    // keep

                    // keep
                    var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5 * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5 * 0.5  /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 4 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 4 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])

                    fromCtx(ctx).beginPath()

                    fromCtx(ctx).moveTo(y0, x0)
                    fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                    fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                    fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                    /* keep */
                    fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                    fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                    fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                    fromCtx(ctx).lineTo(y0, x0)

                    ctx.stroke()

                    // keep computed

                    let pointerBelongings

                    return {
                        draw: function(){
                            // keep
                        },
                        getPointerBelongings: function() {
                            return pointerBelongings
                        },
                        compute: function() {
                            pointerBelongings = {
                                // keep
                                // keep pointerBelongings
                                knotAtBottomLeft: {y: y0, x: x0},
                                knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                                knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                                knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                            }
                        }
                    }
                }


                let constructFrontKnotFromPointer = function(args) {
                    // let front
                    // let profile
                    let [fromY, fromX] = args

                    let ctx = document.querySelector('#scene').getContext('2d')

                    // keep
                    var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                    // keep

                    let [startingY, startingX] = [100, 100]
                    // keep

                    // keep
                    var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5 * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5 * 0.5), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])

                    fromCtx(ctx).beginPath()

                    fromCtx(ctx).moveTo(y0, x0)
                    fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                    fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                    fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                    /* keep */
                    fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                    fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                    fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                    fromCtx(ctx).lineTo(y0, x0)

                    ctx.stroke()

                    // keep computed

                    let pointerBelongings

                    return {
                        draw: function(){
                            // keep
                        },
                        getPointerBelongings: function() {
                            return pointerBelongings
                        },
                        compute: function() {
                            pointerBelongings = {
                                // keep
                                // keep pointerBelongings
                                knotAtBottomLeft: {y: y0, x: x0},
                                knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                                knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                                knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                            }
                        }
                    }
                }

                let constructProfileKnotFromPointerFromKnotStory = function(args) {
                    let [fromY, fromX] = args

                    let ctx = document.querySelector('#scene').getContext('2d')
                    // keep

                    // keep
                    // pointerBelongingsStickdConstructBottom.fromCompact({fromY, fromX}).bind(/* keep */)

                    let profileKnot = constructProfileKnotFromPointer([fromY, fromX])
                    profileKnot.compute()

                    let pointerBelongings = profileKnot.getPointerBelongings()

                    let [startingY, startingX] = [100, 100]
                    // keep
                    let knotWi = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                    let knotProfile = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y

                    console.log(pointerBelongings)
                    // keep
                    var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((100 + knotWi - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), 100 - startingX].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((100 + knotWi - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])

                    fromCtx(ctx).moveTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5 * 0.5)
                    fromCtx(ctx).lineTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)

                    fromCtx(ctx).moveTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)
                    fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)

                    /* keep */
                    fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)
                    fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)

                    fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)
                    fromCtx(ctx).lineTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5  * 0.5)

                    ctx.stroke()

                    // keep computed

                    let pointerBelongingsComputed

                    return {
                        draw: function(){
                            // keep
                        },
                        getPointerBelongings: function() {
                            return pointerBelongingsComputed
                        },
                        compute: function() {
                            pointerBelongingsComputed = {
                                // keep
                                // keep pointerBelongings
                                knotAtBottomLeft: {y: y0, x: x0},
                                knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                                knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                                knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                            }
                        }
                    }
                }

                for(let k = 0; k < knotStoryPointerBelongingsFromLatest.length; k++) {
                    // keep !
                    if(knotStoryPointerBelongingsFromLatest[k].fromY <= fromY
                        && fromY <= (knotStoryPointerBelongingsFromLatest[k].fromY /* keep - */ + knotStoryPointerBelongingsFromLatest[k].knotProfile)

                        && knotStoryPointerBelongingsFromLatest[k].fromX <= fromX 
                        && fromX <= (knotStoryPointerBelongingsFromLatest[k].fromX + knotStoryPointerBelongingsFromLatest[k].knotWi)
                    ) {
                        // keep !
                        // use #descending-from-the-sun

                        // keep structure from front-statement
                        // keep pointer belongings from front from knot story


                        // keep kano
                        var pointerBelongingsBottomFromComputedFromStorage = JSON.parse(storageBottomStickdFromStory.fromLatest(/* keep */ 4)[k])[0]

                        // keep
                        for(let i = 0; i < pointerBelongingsBottomFromComputedFromStorage.length; i++) {
                            // keep
                            let fromY = pointerBelongingsBottomFromComputedFromStorage[i].fromY
                            let fromX = pointerBelongingsBottomFromComputedFromStorage[i].fromX

                            // keep
                            let profileKnot = constructProfileKnotFromPointerFromKnotStory([fromY, fromX])
                            
                            // keep
                        }

                        // keep kano
                        var pointerBelongingsFromComputedFromStorage = JSON.parse(storageStory.fromLatest(/* keep */ 4)[k])[0]

                        // keep
                        for(let i = 0; i < pointerBelongingsFromComputedFromStorage.length; i++) {
                            // keep
                            let fromY = pointerBelongingsFromComputedFromStorage[i].fromY
                            let fromX = pointerBelongingsFromComputedFromStorage[i].fromX

                            // keep
                            let frontKnot = constructFrontKnotFromPointer([fromY, fromX])
                            frontKnot.compute()

                            let pointerBelongings = frontKnot.getPointerBelongings()

                            // use #descending-from-the-sun
                            let knotWi = pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                            let knotProfile = pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y

                            // keep

                            constructFrontClosingKnotFromPointer([
                                pointerBelongingsFromComputedFromStorage[i].fromY - knotProfile, fromX + knotWi * 0.2
                            ])
                        }

                    }
                }
            }


            // keep front
            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                let ctx = document.querySelector('#scene').getContext('2d')
                // keep

                let profileKnot = constructProfileKnotFromPointer([fromY, fromX])
                profileKnot.compute()

                let pointerBelongings = profileKnot.getPointerBelongings()

                let [startingY, startingX] = [100, 100]
                // keep
                let knotWi = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                let knotProfile = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y

                console.log(pointerBelongings)
                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((100 + knotWi - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((100 + knotWi - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])

                fromCtx(ctx).moveTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5 * 0.5)
                fromCtx(ctx).lineTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)

                fromCtx(ctx).moveTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)

                /* keep */
                fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)

                fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5  * 0.5)

                ctx.stroke()

                return
                
            }


            var fromY = calc(100 - 100 - 100 - 40)
            var fromX = 250 /* keep */ + 800 + 400 /* keep */ + 400 + 200


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft

            let takeOne = function(/* keep */ arr) {
                return arr[0]
            }


            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                // document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed').onupload = function(event){
                //     console.log(event)

                //     process.exit()
                // }
                let fromKnotInput = function(knotInput) {

                    knotInput.oninput = function(event, file) {
                        // keep
                        let knotFile = takeOne(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed').files)

                        // keep
                        document.querySelector('.knot-from-front').src = URL.createObjectURL(knotFile) 

                        // keep
                        document.querySelector('.knot-from-perspective').src = URL.createObjectURL(knotFile) 
                    }
                }

                fromKnotInput(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed'))


                document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed').click()

                return
            }

            // keep

            var fromY = calc(100 - 100)
            var fromX = /* keep 400 + 100 */ 400 + 100 /* keep */ + 400 + 200 /* keep */ + 800 + 400


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var knotBottomStartingFromY = fromY
            var knotBottomStartingFromX = fromX

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft

            let knotFrontEntireStartingFromY = calc(100 - 100 - 200)
            let knotFrontEntireStartingFromX = 200 + 100 /* keep */ + 50 /* keep */ + 800 + 400

            // keep bottom
            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                let ctx = document.querySelector('#scene').getContext('2d')
                // keep

                // keep
                // pointerBelongingsStickdConstructBottom.fromCompact({fromY, fromX}).bind(/* keep */)

                let profileKnot = constructProfileKnotFromPointer([fromY, fromX])
                profileKnot.compute()

                let pointerBelongings = profileKnot.getPointerBelongings()

                let [startingY, startingX] = [100, 100]
                // keep
                let knotWi = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                let knotProfile = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y

                console.log(pointerBelongings)
                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((100 + knotWi - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((100 + knotWi - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])

                fromCtx(ctx).moveTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5 * 0.5)
                fromCtx(ctx).lineTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)

                fromCtx(ctx).moveTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)

                /* keep */
                fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)

                fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5  * 0.5)

                ctx.stroke()


                pointerBelongingsStickdConstructBottom.fromCompact({
                    fromY, 
                    fromX,
                    knotWi: knotAtTopLeftX - knotAtTopRightX, 
                    knotProfile: knotAtTopRightY - knotAtBottomRightY,

                    knotBottomStartingFromY: knotBottomStartingFromX,
                    knotBottomStartingFromX: knotBottomStartingFromY,

                    knotFrontEntireStartingFromY: knotFrontEntireStartingFromX,
                    knotFrontEntireStartingFromX: knotFrontEntireStartingFromY,

                    // knotFrontStartingFromY: knotFrontStartingFromX,
                    // knotFrontStartingFromX: knotFrontStartingFromY
                }).bind(/* keep */)


                return
            }


            var fromY = calc(100 - 100 - 100 - 40)
            var fromX = /* keep 400 + 100 */ 400 + 100 /* keep */ + 800 + 400 /* keep */ + 400 + 200


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft

            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                // document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed').onupload = function(event){
                //     console.log(event)

                //     process.exit()
                // }
                let fromKnotInput = function(knotInput) {

                    knotInput.oninput = function(event, file) {
                        // keep
                        let knotFile = takeOne(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-bottom').files)

                        // keep
                        document.querySelector('.knot-from-bottom').src = URL.createObjectURL(knotFile) 

                        // keep
                        document.querySelector('.knot-from-terra-bottom').src = URL.createObjectURL(knotFile) 
                    }
                }

                fromKnotInput(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-bottom'))


                document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-bottom').click()

                return
            }



            // keep terra bottom
            var fromY = calc(100 - 100)
            var fromX = /* keep 400 + 250 + 100 */ 400 + 250 + 100 /* keep */ + 400 + 200 /* keep */ + 800 + 400


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var knotTerraBottomStartingFromY = fromY
            var knotTerraBottomStartingFromX = fromX

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft


            // keep bottom
            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                let constructTerraBottomStartingKnotFromPointer = function(args) {
                    // let front
                    // let profile
                    let [fromY, fromX] = args

                    let ctx = document.querySelector('#scene').getContext('2d')

                    // keep
                    var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                    // keep

                    let [startingY, startingX] = [100, 100]
                    // keep

                    // keep
                    var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * calc(2) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * calc(2) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5) * 0.5)].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * calc(2) * 1.7 * 0.5 * 0.5 * 0.5) * 0.5)].reverse(), [fromY, fromX])

                    fromCtx(ctx).beginPath()
                    fromCtx(ctx).useFillStyle("#f0e68cff")

                    fromCtx(ctx).moveTo(y0, x0)
                    fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                    // fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                    fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                    /* keep */
                    // fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                    fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                    // fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                    fromCtx(ctx).lineTo(y0, x0)

                    fromCtx(ctx).fill()

                    ctx.stroke()

                    // keep computed

                    let pointerBelongings

                    return {
                        draw: function(){
                            // keep
                        },
                        getPointerBelongings: function() {
                            return pointerBelongings
                        },
                        compute: function() {
                            pointerBelongings = {
                                // keep
                                // keep pointerBelongings
                                knotAtBottomLeft: {y: y0, x: x0},
                                knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                                knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                                knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                            }
                        }
                    }
                }
                let constructTerraKnotFromPointer = function(args) {
                    // let front
                    // let profile
                    let [fromY, fromX] = args

                    let ctx = document.querySelector('#scene').getContext('2d')

                    // keep
                    var /* keep knot */ [y0, x0] = fromPointer(fromProjectionCenter([100, 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 0.5 * 0.5), 100].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 0.5 * 0.5), calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(fromProjectionCenter(/* keep */ /*[200, 100]*/ [100, calc(200 * 1.7 * 0.5 * 0.5)].reverse()), [fromY, fromX])

                    // keep

                    let [startingY, startingX] = [100, 100]
                    // keep

                    // keep
                    var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * calc(2) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * calc(2) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5) * 0.5)].reverse(), [fromY, fromX])
                    var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * calc(2) * 1.7 * 0.5 * 0.5 * 0.5) * 0.5)].reverse(), [fromY, fromX])

                    fromCtx(ctx).beginPath()
                    fromCtx(ctx).useFillStyle("#f0e68cff")

                    fromCtx(ctx).moveTo(y0, x0)
                    fromCtx(ctx).lineTo(knotAtBottomRightY, knotAtBottomRightX)

                    // fromCtx(ctx).moveTo(knotAtBottomRightY, knotAtBottomRightX)
                    fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                    /* keep */
                    // fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                    fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                    // fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                    fromCtx(ctx).lineTo(y0, x0)

                    fromCtx(ctx).fill()

                    ctx.stroke()

                    // keep computed

                    let pointerBelongings

                    return {
                        draw: function(){
                            // keep
                        },
                        getPointerBelongings: function() {
                            return pointerBelongings
                        },
                        compute: function() {
                            pointerBelongings = {
                                // keep
                                // keep pointerBelongings
                                knotAtBottomLeft: {y: y0, x: x0},
                                knotAtBottomRight: {y: knotAtBottomRightY, x: knotAtBottomRightX},
                                knotAtTopRight: {y: knotAtTopRightY, x: knotAtTopRightX},
                                knotAtTopLeft: {y: knotAtTopLeftY, x: knotAtTopLeftX}
                            }
                        }
                    }
                }

                let ctx = document.querySelector('#scene').getContext('2d')
                // keep


                let pointerBelongingsStickd = pointerBelongingsStickdTerraBottom.fromLatest(/* keep */ 10)

                for(let i = 0; i < pointerBelongingsStickd.length; i++) {
                    console.log(pointerBelongingsStickd[i].fromY - pointerBelongingsStickd[i].knotProfile, pointerBelongingsStickd[i].fromY)

                    // keep

                    console.log(pointerBelongingsStickd[i].fromX, pointerBelongingsStickd[i].fromX + pointerBelongingsStickd[i].knotWi)
                    console.log(JSON.stringify({fromY, fromX}))



                    if(
                        ((/* keep pointerBelongingsStickd[i].fromY - pointerBelongingsStickd[i].knotProfile) <= fromY*/ fromY <= pointerBelongingsStickd[i].fromY))
                        && ((pointerBelongingsStickd[i].fromX) <= fromX && fromX <= pointerBelongingsStickd[i].fromX + pointerBelongingsStickd[i].knotWi)
                    ) {

                        let profileKnot = constructTerraBottomKnotFromPointer([
                            pointerBelongingsStickd[i].fromY - pointerBelongingsStickd[i].knotProfile, 
                            pointerBelongingsStickd[i].fromX, 
                            fromY - pointerBelongingsStickd[i].knotProfile,
                            pointerBelongingsStickd[i].fromX + pointerBelongingsStickd[i].knotWi
                        ])
                        profileKnot.compute()

                        constructTerraBottomStartingKnotFromPointer([fromY, pointerBelongingsStickd[i].fromX])

                        constructTerraKnotFromPointer([pointerBelongingsStickd[i].fromY, pointerBelongingsStickd[i].fromX])


                        let pointerBelongings = profileKnot.getPointerBelongings()

                        let [startingY, startingX] = [100, 100]
                        // keep
                        let knotWi = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                        let knotProfile = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y


                        // keep
                        // keep
                        // var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                        // var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((100 + knotWi - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), 100 - startingX].reverse(), [fromY, fromX])
                        // var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((100 + knotWi - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])
                        // var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 1.7 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])

                        // fromCtx(ctx).moveTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5 * 0.5)
                        // fromCtx(ctx).lineTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)

                        // fromCtx(ctx).moveTo(knotAtBottomRightY - knotProfile * 0.5, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)
                        // fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)

                        // /* keep */
                        // fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)
                        // fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)

                        // fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)
                        // fromCtx(ctx).lineTo(y0 - knotProfile * 0.5, x0 + knotWi * 0.5 * 0.5  * 0.5)

                        // ctx.stroke()


                        break
                    }
                }
                return    
            }


            // keep perspective
            var fromY = calc(100 - 100)
            var fromX = /* keep 700 + 250 + 50 */ 700 + 250 + 50 /* keep */ + 400 + 200 /* keep */ + 800 + 400


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var knotPerspectiveStartingFromY = fromY
            var knotPerspectiveStartingFromX = fromX

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft


            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                let ctx = document.querySelector('#scene').getContext('2d')
                // keep

                let profileKnot = constructPerspectiveKnotFromPointer([fromY, fromX])
                profileKnot.compute()

                let pointerBelongings = profileKnot.getPointerBelongings()

                let [startingY, startingX] = [100, 100]
                // keep
                let knotWi = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                let knotProfile = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y

                pointerBelongingsStickdPerspective.fromCompact({ fromY, fromX, 
                    knotWi, knotProfile, 
                    knotPerspectiveStartingFromY: knotPerspectiveStartingFromX, 
                    knotPerspectiveStartingFromX: knotPerspectiveStartingFromY
                }).bind(/* keep */)
                // keep
                
                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((400 - startingY) * 2 * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), (100 - startingX)].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((400 - startingY) * 2 * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 0.5 * 0.5 * 0.5))].reverse(), [fromY, fromX])

                fromCtx(ctx).beginPath()
                fromCtx(ctx).useFillStyle("#98fb98")

                fromCtx(ctx).moveTo(y0 - knotProfile * 0.7, x0)
                fromCtx(ctx).lineTo(knotAtBottomRightY - knotProfile * 0.7, knotAtBottomRightX)

                // fromCtx(ctx).moveTo(knotAtBottomRightY - knotProfile * 0.7, knotAtBottomRightX)
                fromCtx(ctx).lineTo(knotAtTopRightY, knotAtTopRightX)

                /* keep */
                // fromCtx(ctx).moveTo(knotAtTopRightY, knotAtTopRightX)
                fromCtx(ctx).lineTo(knotAtTopLeftY, knotAtTopLeftX)

                // fromCtx(ctx).moveTo(knotAtTopLeftY, knotAtTopLeftX)
                fromCtx(ctx).lineTo(y0 - knotProfile * 0.7, x0)

                fromCtx(ctx).fill()

                ctx.stroke()
                
            }



            // keep terra
            var fromY = calc(100 - 100)
            var fromX = /* keep 1000 + 250 */ 1000 + 250 /* keep */ + 400 + 200 /* keep */ + 800 + 400


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var knotTerraStartingFromY = fromY
            var knotTerraStartingFromX = fromX

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft


            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                let ctx = document.querySelector('#scene').getContext('2d')
                // keep

                pointerBelongingsStickdTerra.fromCompact({fromY, fromX, 
                    knotTerraStartingFromY, knotTerraStartingFromX, 
                    knotTerraBottomStartingFromY, knotTerraBottomStartingFromX
                }).bind(/* keep */)

                let profileKnot = constructTerraKnotFromPointer([fromY, fromX])
                profileKnot.compute()

                let pointerBelongings = profileKnot.getPointerBelongings()

                let [startingY, startingX] = [100, 100]
                // keep
                let knotWi = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomRight.x - pointerBelongings.knotAtBottomLeft.x
                let knotProfile = /* keep descendingFromTheSun */ pointerBelongings.knotAtBottomLeft.y - pointerBelongings.knotAtTopLeft.y

                // keep
                var /* keep knot */ [y0, x0] = /* keep */ /* keep */ fromPointer([100 - startingY, 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /* [100, 400] */ [calc((100 + knotWi - startingY) * 1.7 /* keep */  * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), 100 - startingX].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 400]*/ [calc((100 + knotWi - startingY) * 1.7 /* keep */ * 0.9 /* keep */ * 0.7 /* keep */ * 0.5 /* keep */ * 0.5), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 1.4 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])
                var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromPointer(/* keep fromProjectionCenter */ /* keep */ /*[200, 100]*/ [(100 - startingY), calc(/* keep */ - calc((200 - startingX) * 2 * 1.7 * 1.4 * 0.9 * 0.5 * 0.2))].reverse(), [fromY, fromX])

                ctx.beginPath()

                fromCtx(ctx).moveTo(y0 - knotProfile * 0.5 * 0.4, x0 + knotWi * 0.5 * 0.5 * 0.5)
                fromCtx(ctx).lineTo(knotAtBottomRightY - knotProfile * 0.5 * 0.4, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)

                // fromCtx(ctx).moveTo(knotAtBottomRightY - knotProfile * 0.5 * 0.4, knotAtBottomRightX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(calc(knotAtTopRightY + knotProfile * 0.1), knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)

                /* keep */
                // fromCtx(ctx).moveTo(calc(knotAtTopRightY + knotProfile * 0.1), knotAtTopRightX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(calc(knotAtTopLeftY + knotProfile * 0.1), knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)

                // fromCtx(ctx).moveTo(calc(knotAtTopLeftY + knotProfile * 0.1), knotAtTopLeftX + knotWi * 0.5 * 0.5  * 0.5)
                fromCtx(ctx).lineTo(y0 - knotProfile * 0.5 * 0.4, x0 + knotWi * 0.5 * 0.5  * 0.5)

                ctx.stroke()
                return
            }


            var fromY = calc(100 - 100 - 100 - 40)
            var fromX = 1000 + 250 /* keep */ + 800 + 400  /* keep */ + 400 + 200 


            var /* keep knot */ [y0, x0] = fromProjectionCenter([100 + fromY, 100 + fromX].reverse())
            var /* keep knot */ [knotAtBottomRightY, knotAtBottomRightX] = fromProjectionCenter(/* keep */ /* [100, 400] */ [calc(400 * 1.7 * 1.4 + fromY), 100 + fromX].reverse())
            var /* keep knot */ [knotAtTopRightY, knotAtTopRightX] = fromProjectionCenter(/* keep */ /*[200, 400]*/ [calc(400 * 1.7 * 1.4 + fromY), calc(200 * 1.7 + fromX)].reverse())
            var /* keep knot */ [knotAtTopLeftY, knotAtTopLeftX] = fromProjectionCenter(/* keep */ /*[200, 100]*/ [100 + fromY, calc(200 * 1.7 + fromX)].reverse())

            var fromY = event.layerY - knotFromBottomStatement.ctx.offsetTop
            var fromX = event.layerX - knotFromBottomStatement.ctx.offsetLeft

            if(y0 <= fromY && fromY <= knotAtTopLeftY && x0 <= fromX && fromX <= knotAtBottomRightX) {
                // alert("sample")

                // document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-knot-constructed').onupload = function(event){
                //     console.log(event)

                //     process.exit()
                // }
                let fromKnotInput = function(knotInput) {

                    knotInput.oninput = function(event, file) {
                        // keep
                        let knotFile = takeOne(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-front').files)

                        // keep
                        // keep
                        document.querySelector('.knot-from-terra').src = URL.createObjectURL(knotFile) 
                    }
                }

                fromKnotInput(document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-front'))


                document.querySelector('.statement-from-knot-use').querySelector('.knot-use-upload-front').click()

                return
            }
            // keep


            // keep

            // keep
            pointerBelongingsStickdKnotClosing.fromLatest(1)

            let knotClosingFound = knotLocateStickdKnotClosing.locateFrom(providedY, providedX)

            if(knotClosingFound) {
                // keep

                // alert(knotClosingFound)
                dictSpawnFromBottomStatement[JSON.stringify({y: providedY, x: providedX})] = { y: providedY, x: providedX }

                let pointerBelongingsAtKnotLocate = new PointerBelongingsAtKnotFromBottomStatementFromClosing()
                pointerBelongingsAtKnotLocate.assignCoordinates(providedY, providedX)

                let referenceKnot = knotClosingFound.getPointerBelongingsFromFrontStatement()
                pointerBelongingsAtKnotLocate.assignReferenceKnot(referenceKnot)
                pointerBelongingsAtKnotLocate.useKnotRelativeSize(that.knotRelativeSize)

                // compute from knot relative size
                pointerBelongingsAtKnotLocate.compute()

                let pointerBelongings = pointerBelongingsAtKnotLocate.pointerBelongings
                // alert(JSON.stringify(pointerBelongings))

                // keep !
                // let me see . that is possible through pencil
                accuratePencil.connectKnotToBottomStatement(bottomStatementAtKnotClosing, new KnotPointerBelongingsFromBottomStatementFromClosing())

                let knotPointerBelongings = accuratePencil.constructKnot()

                knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongings.compute()

                pointerBelongingsAtKnotLocate.useKnot(knotPointerBelongings)
                // alert("compute")
                pointerBelongingsAtKnotLocate.compute()

                // alert(JSON.stringify(pointerBelongingsAtKnotLocate.pointerBelongings))

                // keep
                knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongingsAtKnotLocate.pointerBelongings)
                knotPointerBelongings.computeFromFront()


                let pointerBelongingsAtKnotFromFront = knotPointerBelongings.getPointerBelongingsFromFrontStatement()

                // keep
                let pointerBelongingsAtKnotFromClosing = pointerBelongingsAtKnotLocate.pointerBelongings
                // pointerBelongingsAtKnotFromClosing.y = pointerBelongingsAtKnotFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y
                // alert(JSON.stringify(pointerBelongingsAtKnotFromFront))
                // keep
                // pointerBelongingsAtKnotFromClosing.x = pointerBelongingsAtKnotLocate.pointerBelongings.x

                let pointerBelongingsFromFrontFromKnotFromCubicProject = knotClosingFound.getPointerBelongingsFromFrontStatement()

                pointerBelongingsAtKnotFromClosing.knotAtTopLeftY = pointerBelongingsAtKnotFromFront.pointerBelongings.pointerBelongingsAtTopLeft.y
                pointerBelongingsAtKnotFromClosing.knotAtBottomLeftY = pointerBelongingsAtKnotFromFront.pointerBelongings.pointerBelongingsAtBottomLeft.y

                pointerBelongingsAtKnotFromClosing.referenceKnotAtProfile = that.descendingFromTheSun([pointerBelongingsFromFrontFromKnotFromCubicProject.pointerBelongings.pointerBelongingsAtTopLeft.y, pointerBelongingsFromFrontFromKnotFromCubicProject.pointerBelongings.pointerBelongingsAtBottomLeft.y]) - pointerBelongingsFromFrontFromKnotFromCubicProject.pointerBelongings.pointerBelongingsAtTopLeft.y
                // alert(JSON.stringify(pointerBelongingsAtKnotFromClosing))

                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongings.throughSpawnedPointerBelongings(pointerBelongingsAtKnotFromClosing))
                accuratePencil.useScene(sceneSpawnPointerBelongings)

                accuratePencil.draw()

                // keep
                // knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongingsAtKnotLocate.pointerBelongings)
                // knotPointerBelongings.computeFromFront()

                // keep !

                let pointerBelongingsFromFront = knotPointerBelongings.getPointerBelongingsFromFrontStatement()

                dictSpawnFromBottomStatement[JSON.stringify({y: providedY, x: providedX})]['pointerBelongings'] = pointerBelongingsFromFront
                // keep memory protect

                let knotPointerBelongingsFromComputed = knotPointerBelongings

                knotLocateStickdKnotStarting.put(pointerBelongingsFromFront.pointerBelongings, knotPointerBelongingsFromComputed)
            }

            // keep

            // from-pointer-belongings
            if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(2).getStatus() === 'passedThrough') {
                // keep
            }

            if(knotFromBottomStatement.stickedAlbumStacked.knotFrom('from-pointer-belongings').at(1).getStatus() === 'passedThrough') {
                // keep

                // keep
                // knotSelected = 'selectKnotLocate'

                // knotFound
                // keep

                let pointerBelongingsAtKnotLocateFromComputed = new PointerBelongingsAtKnotFromBottomStatementFromComputed()
                pointerBelongingsAtKnotLocateFromComputed.constructCoordinates(providedY, providedX)
                pointerBelongingsAtKnotLocateFromComputed.useKnotRelativeSize(that.knotRelativeSize)

                // compute from knot relative size
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !

                let pointerBelongings = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings
                // keep !

                // keep !
                let knotPointerBelongings = new KnotPointerBelongingsFromBottomStatement()

                knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongings.compute()

                pointerBelongingsAtKnotLocateFromComputed.useKnot(knotPointerBelongings)
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !
                let fromY = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.y
                let fromX = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.x

                pointerBelongingsStickd.fromCompact(/* keep pointerBelongingsAtKnotLocateFromComputed.pointerBelongings */ {y: providedY, x: providedX}).bind()

                // original knot
                let knotFound = knotLocateStickd.locateFrom(
                    // keep
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                    providedY,
                    providedX

                    // from-bottom-statement
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                )
                // keep !

                if(knotFound) {
                    // keep
                } else {
                    return /* keep */
                }

                knotComputed = JSON.parse(JSON.stringify(knotFound))
                knotComputed.spawnedPointerBelongings = JSON.parse(JSON.stringify(knotFound.spawnedPointerBelongings))
                knotComputed.passThrough = knotFound.passThrough

                knotFromChalk = accuratePencil.throughChalk("#008b8b", knotComputed)
                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotFromChalk)

                accuratePencil.draw()

                return /* keep */
            }



            // into-bottom-statement
            if(knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep

                // keep
                // knotSelected = 'selectKnotLocate'

                // knotFound
                // keep

                let pointerBelongingsAtKnotLocateFromComputed = new PointerBelongingsAtKnotFromBottomStatementFromComputed()
                pointerBelongingsAtKnotLocateFromComputed.constructCoordinates(providedY, providedX)
                pointerBelongingsAtKnotLocateFromComputed.useKnotRelativeSize(that.knotRelativeSize)

                // compute from knot relative size
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !

                let pointerBelongings = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings
                // keep !

                // keep !
                let knotPointerBelongings = new KnotPointerBelongingsFromBottomStatement()

                knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongings.compute()

                pointerBelongingsAtKnotLocateFromComputed.useKnot(knotPointerBelongings)
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !
                let fromY = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.y
                let fromX = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.x

                // original knot
                let knotFound = knotLocateStickd.locateFrom(
                    // keep
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                    providedY,
                    providedX

                    // from-bottom-statement
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                )
                // keep !

                let foundFrom
                if(knotFound) {
                    // keep
                    foundFrom = 'from-bottom-statement'
                    
                } else {
                    pointerBelongingsStickdBottom.fromCompact(/* keep pointerBelongingsAtKnotLocateFromComputed.pointerBelongings */ {y: providedY, x: providedX}).bind()

                    knotFound = knotLocateStickdBottom.locateFrom(
                        // keep
                        // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                        // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                        providedY,
                        providedX

                        // from-bottom-statement
                        // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                        // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                    )
                    // keep !

                    if(knotFound) {
                        // keep
                    } else {
                        return /* keep */
                    }

                    knotComputed = JSON.parse(JSON.stringify(knotFound))
                    knotComputed.spawnedPointerBelongings = JSON.parse(JSON.stringify(knotFound.spawnedPointerBelongings))
                    knotComputed.passThrough = knotFound.passThrough

                    knotFromChalk = accuratePencil.throughChalk("#008b8b", knotComputed)
                    accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotFromChalk)

                    accuratePencil.draw()

                    return /* keep */
                }
            }

            // into-bottom-statement
            if(knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep

                // keep
                // knotSelected = 'selectKnotLocate'

                // knotFound
                // keep

                let pointerBelongingsAtKnotLocateFromComputed = new PointerBelongingsAtKnotFromBottomStatementFromComputed()
                pointerBelongingsAtKnotLocateFromComputed.constructCoordinates(providedY, providedX)
                pointerBelongingsAtKnotLocateFromComputed.useKnotRelativeSize(that.knotRelativeSize)

                // compute from knot relative size
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !

                let pointerBelongings = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings
                // keep !

                // keep !
                let knotPointerBelongings = new KnotPointerBelongingsFromBottomStatement()

                knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongings.compute()

                pointerBelongingsAtKnotLocateFromComputed.useKnot(knotPointerBelongings)
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !
                let fromY = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.y
                let fromX = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.x

                pointerBelongingsStickd.fromCompact(/* keep pointerBelongingsAtKnotLocateFromComputed.pointerBelongings */ {y: providedY, x: providedX}).bind()

                // original knot
                let knotFound = knotLocateStickd.locateFrom(
                    // keep
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                    providedY,
                    providedX

                    // from-bottom-statement
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                )
                // keep !

                if(knotFound) {
                    // keep
                } else {
                    return /* keep */
                }

                knotComputed = JSON.parse(JSON.stringify(knotFound))
                knotComputed.spawnedPointerBelongings = JSON.parse(JSON.stringify(knotFound.spawnedPointerBelongings))
                knotComputed.passThrough = knotFound.passThrough

                knotFromChalk = accuratePencil.throughChalk("#008b8b", knotComputed)
                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotFromChalk)

                accuratePencil.draw()

                return /* keep */
            }

            // from-pointer-belongings
            if(knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).getStatus() === 'passedThrough') {
                // keep

                // keep
                // knotSelected = 'selectKnotLocate'

                // knotFound
                // keep

                let pointerBelongingsAtKnotLocateFromComputed = new PointerBelongingsAtKnotFromBottomStatementFromComputed()
                pointerBelongingsAtKnotLocateFromComputed.constructCoordinates(providedY, providedX)
                pointerBelongingsAtKnotLocateFromComputed.useKnotRelativeSize(that.knotRelativeSize)

                // compute from knot relative size
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !

                let pointerBelongings = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings
                // keep !

                // keep !
                let knotPointerBelongings = new KnotPointerBelongingsFromBottomStatement()

                knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongings.compute()

                pointerBelongingsAtKnotLocateFromComputed.useKnot(knotPointerBelongings)
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !
                let fromY = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.y
                let fromX = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.x

                pointerBelongingsStickd.fromCompact(/* keep pointerBelongingsAtKnotLocateFromComputed.pointerBelongings */ {y: providedY, x: providedX}).bind()

                // original knot
                let knotFound = knotLocateStickd.locateFrom(
                    // keep
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                    providedY,
                    providedX

                    // from-bottom-statement
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                )
                // keep !

                if(knotFound) {
                    // keep
                } else {
                    return /* keep */
                }

                knotComputed = JSON.parse(JSON.stringify(knotFound))
                knotComputed.spawnedPointerBelongings = JSON.parse(JSON.stringify(knotFound.spawnedPointerBelongings))
                knotComputed.passThrough = knotFound.passThrough

                knotFromChalk = accuratePencil.throughChalk("#008b8b", knotComputed)
                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotFromChalk)

                accuratePencil.draw()

                return /* keep */
            }

            if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep
                // knotSelected = 'selectKnotLocate'

                // knotFound
                // keep

                let pointerBelongingsAtKnotLocateFromComputed = new PointerBelongingsAtKnotFromBottomStatementFromComputed()
                pointerBelongingsAtKnotLocateFromComputed.constructCoordinates(providedY, providedX)
                pointerBelongingsAtKnotLocateFromComputed.useKnotRelativeSize(that.knotRelativeSize)

                // compute from knot relative size
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !

                let pointerBelongings = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings
                // keep !

                // keep !
                let knotPointerBelongings = new KnotPointerBelongingsFromBottomStatement()

                knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongings.compute()

                pointerBelongingsAtKnotLocateFromComputed.useKnot(knotPointerBelongings)
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !
                let fromY = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.y
                let fromX = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.x

                pointerBelongingsStickd.fromCompact(pointerBelongingsAtKnotLocateFromComputed.pointerBelongings).bind()
                // keep

                // original knot
                let knotFound = knotLocateStickd.locateFrom(
                    // keep
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                    providedY,
                    providedX

                    // from-bottom-statement
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                )
                // keep !

                if(knotFound) {
                    // keep
                } else {
                    return /* keep */
                }

                knotComputed = JSON.parse(JSON.stringify(knotFound))
                knotComputed.spawnedPointerBelongings = JSON.parse(JSON.stringify(knotFound.spawnedPointerBelongings))
                knotComputed.passThrough = knotFound.passThrough

                knotFromChalk = accuratePencil.throughChalk("#008b8b", knotComputed)
                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotFromChalk)

                accuratePencil.draw()
            }
            // from-bottom-statement

            // keep !

            // pointerBelongingsAtKnot.style.top = providedY
            // pointerBelongingsAtKnot.style.left = providedX
            // you see, there is double save ! don't speak on phone anymore . please . !
            // use telegram !
            if(['intoKnotLocate'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from belowConnected
                // normalizedKnotBelow

                // keep
            }

            if(['intoKnotFromBottomStatement'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from connected
                // normalizedKnot

                // keep
            }

            if(['intoKnotFromProfile'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from profileConnected
                // normalizedProfileKnot

                // keep !

                // keep

                // new ProfileFromPicto
            }

            if(knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(2).getStatus() === 'pressed'
                && knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).getStatus() === 'passedThrough') {
                // keep

                let passFrom, passTo

                // keep

                return /* keep */
            }

            // keep bottom-statement
            if(['intoKnotFromFront'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from frontConnected
                // normalizedFrontKnot

                // keep

                // let passFrom, passTo
                // new PointerBelongingsFromBottomStatementFromComputed
                // new KnotPointerBelongingsFromBottomStatement


                // passThrough

                // new FrontFromPicto(passFrom, passTo, passThrough)

                // accuratePencil.remember

                // accuratePencil.draw
            }

            if(['connectThrough'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from connected

                // normalizedKnot

                // keep
                // atKnotFromComputed below knotAbove

                // accuratePencil.draw()
            }


            if(['pointerFromProfile'].indexOf(knotSelected) !== -1) {
                // atPointerBelongingsFromKnotFromComputed

                let pointerBelongings = new PointerBelongingsAtKnotFromProfile()

                let pointerBelongingsFromBottomStatement = accuratePencil.atPointerBelongingsFromBottomStatement()

                pointerBelongings.fromBottomStatement(pointerBelongingsFromBottomStatement)
                pointerBelongings.assignCoordinates(providedY, providedX)

                // pass through

                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, pointerBelongings)
                accuratePencil.useScene(sceneSpawnPointerBelongings)

                accuratePencil.draw()

                return /* keep */
            }

            if(['pointerFromFront'].indexOf(knotSelected) !== -1) {
                // atPointerBelongingsFromKnotFromComputed

                // keep !
                // spawned-pointer-belongings
                // pointerBelongingsFromFront

                // new PointerBelongingsAtKnotFromBottomStatementFromComputed
                // new PointerBelongingsAtKnotFromBottomStatement

                // keep

                // new KnotPointerBelongingsFromFrontStatement

                // new KnotPointerBelongingsFromBottomStatement
            }

            // dictSpawnFromBottomStatement
            let knotFound = knotLocateStickd.locateFrom(providedY, providedX)
            knotFound && (knotSelected = 'selectKnotLocate')

            if(['selectKnotLocate'].indexOf(knotSelected) !== -1) {
                knotSelected = ''
                return /* keep */
                // keep
                // knotFromComputed below knotAbove

                // dictSpawnFromBottomStatement contains y, x

                // we cannot get payload in real world, only in computed
                // keep

                knotPayload = knotLocatePayloadComputed.payloadFrom(knotFound.id)

                accuratePencil.usePointerBelongingsFromBottomStatement(/* keep */)

                // knotComputed updated with knotPayload
                // change status for knotFromComputed
            }

            if(['spawnPointer'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove
                // keep
            }

            // its actually heap, but we are using programmic style with dict
            dictSpawnFromBottomStatement[JSON.stringify({y: providedY, x: providedX})] = { y: providedY, x: providedX }

            let pointerBelongingsAtKnotLocate = new PointerBelongingsAtKnotFromBottomStatement()
            pointerBelongingsAtKnotLocate.assignCoordinates(providedY, providedX)
            pointerBelongingsAtKnotLocate.useKnotRelativeSize(that.knotRelativeSize)

            // compute from knot relative size
            pointerBelongingsAtKnotLocate.compute()

            let pointerBelongings = pointerBelongingsAtKnotLocate.pointerBelongings
            // keep !
            // let me see . that is possible through pencil
            accuratePencil.connectKnotToBottomStatement(bottomStatementAtKnotLocate, new KnotPointerBelongingsFromBottomStatement())

            let knotPointerBelongings = accuratePencil.constructKnot()

            knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongings)
            knotPointerBelongings.compute()

            pointerBelongingsAtKnotLocate.useKnot(knotPointerBelongings)
            pointerBelongingsAtKnotLocate.compute()

            accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongings.throughSpawnedPointerBelongings(pointerBelongingsAtKnotLocate.pointerBelongings))
            accuratePencil.useScene(sceneSpawnPointerBelongings)

            accuratePencil.draw()

            knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongingsAtKnotLocate.pointerBelongings)
            knotPointerBelongings.computeFromFront()

            // keep !

            let pointerBelongingsFromFront = knotPointerBelongings.getPointerBelongingsFromFrontStatement()

            dictSpawnFromBottomStatement[JSON.stringify({y: providedY, x: providedX})]['pointerBelongings'] = pointerBelongingsFromFront
            // keep memory protect

            let knotPointerBelongingsFromComputed = knotPointerBelongings

            knotLocateStickd.put(pointerBelongingsFromFront.pointerBelongings, knotPointerBelongingsFromComputed)
            // keep
            process.exit()

            // keep
            knotLocatePayloadComputed.put(pointerBelongingsFromFront.id, /* payload details */)
            // keep !

            // sorry, it's knot \karmic

            // keep
            accuratePencil.draw()

            return /* keep */

            // pointerBelongingsAtKnot.style.top = providedY
            // pointerBelongingsAtKnot.style.left = providedX

            // keep ! rememberSpawn

            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y /* keep ! */ && providedX >= that.pointerBelongingsAtBottomLeft.x
                && providedY <= that.pointerBelongingsAtBottomRight.y && providedX <= that.pointerBelongingsAtBottomRight.x
                && that.pointerBelongingsAtRightTop.y <= providedY && providedX <= that.pointerBelongingsAtRightTop.x) {

            }

            // keep
            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y && providedX <= that.pointerBelongingsAtBottomLeft.x
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
            ) {

            }
            // keep !

            // you remember straight
            // and flipped

            // keep !

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                // stack
                // construct preview knot
                // drawLineFromBottomStatement

                // drawLineAtFrontStatement
                // drawLineAtProfileStatement

                // pencil.draw()
                // keep !
            }
            // use double save
        })

        // mouseover tooltip -> selectKnotLocateThroughClick -> useThroughClick -> connect

        // mouseover connectThrough tooltip intoKnotFromProfile
        // mouseover connectThrough toolip intoKnotFromFront

        // mouseover stabilizePointer
        // mouseover connectThrough tooltip intoKnotFromBottomStatement
        // keep ! dictSpawnFromBottomStatement, dictPointerFromFront, dictPointerFromProfile

        // keep knotFromBottomStatement

        return knotFromBottomStatement /* keep */

        // keep
        knotFromBottomStatement.ctx.addEventListener('mouseover', function(event) {
            let providedY = event.clientY
            let providedX = event.clientX

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                pointerBelongingsAtKnot.style.top = event.clientY
                pointerBelongingsAtKnot.style.left = event.clientX

            }
        })
        // keep !

        knotFromBottomStatement.ctx.addEventListener('click', function (event) {
            let providedY = event.clientY
            let providedX = event.clientX

            // traversar sends straight request
            // and receives flipped request

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            // pointerBelongingsAtKnot.style.top = providedY
            // pointerBelongingsAtKnot.style.left = providedX
            // you see, there is double save ! don't speak on phone anymore . please . !
            // use telegram !
            pointerBelongingsAtKnot.style.top = providedY
            pointerBelongingsAtKnot.style.left = providedX

            // keep ! rememberSpawn

            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y /* keep ! */ && providedX >= that.pointerBelongingsAtBottomLeft.x
                && providedY <= that.pointerBelongingsAtBottomRight.y && providedX <= that.pointerBelongingsAtBottomRight.x
                && that.pointerBelongingsAtRightTop.y <= providedY && providedX <= that.pointerBelongingsAtRightTop.x) {

            }

            // keep
            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y && providedX <= that.pointerBelongingsAtBottomLeft.x
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
            ) {

            }
            // keep !

            // you remember straight
            // and flipped

            // keep !

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                // stack
                // construct preview knot
                // drawLineFromBottomStatement

                // drawLineAtFrontStatement
                // drawLineAtProfileStatement

                // pencil.draw()
                // keep !
            }
            // use double save
        })

        // keep knotFromBottomStatement

        return knotFromBottomStatement
    }

    that.useStickedAlbumStacked = function (stickedAlbumStacked) {
        let knotFromBottomStatement = that
        // keep
        knotFromBottomStatement.stickedAlbumStacked = stickedAlbumStacked

        return knotFromBottomStatement
    }

    that.useStickedAlbum = function (stickedAlbum) {
        let knotFromBottomStatement = that
        // keep
        knotFromBottomStatement.stickedAlbum = stickedAlbum

        return knotFromBottomStatement
    }

    that.useCtx = function (ctx) {
        let knotFromBottomStatement = that
        // keep
        that.ctx = ctx

        return knotFromBottomStatement
    }

    that.takeCapture = function () {
        let knotFromBottomStatement = that
        // keep

        // use knot relative size
        // use pointer belongings

        pencil.draw()

        return knotFromBottomStatement
    }
    that.provideKnot = function () {
        return that
    }

    that.captureFromBottomStatementAtTopLeft = function (pointerBelongingsAtTopLeft) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtTopLeft = pointerBelongingsAtTopLeft

        // keep !
        return knotFromBottomStatement
    }
    that.captureFromBottomStatementAtBottomLeft = function (pointerBelongingsAtBottomLeft) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtBottomLeft = pointerBelongingsAtBottomLeft

        // keep !
        return knotFromBottomStatement
    }
    that.captureFromBottomStatementAtBottomRight = function (pointerBelongingsAtBottomRight) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtBottomRight = pointerBelongingsAtBottomRight

        // keep !
        return knotFromBottomStatement
    }
    that.captureFromBottomStatementAtRightTop = function (pointerBelongingsAtRightTop) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtRightTop = pointerBelongingsAtRightTop

        // keep !
        return knotFromBottomStatement
    }
    // keep !

    that.useRelativeSize = function (knotRelativeSizeInstance, traversar) {
        let knotFromBottomStatement = that
        // keep !

        // use knot relative size
        // use pointer belongings
        that.knotRelativeSize = knotRelativeSizeInstance

        return knotFromBottomStatement
    }

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}

function KnotLocateFromBind() {
    let that = this

    // keep !
    // pencil.rememberSample(that.provideKnot())
    let fromEmptySpawnedPointerBelongins = function () {
        // keep
        return null
    }

    let passThrough = function () {
        // keep !
    }
    that.connectedToCanvas = {}
    that.connectedToCanvas.ctx = document.querySelector('.statement-at-front').querySelector('#scene') /* keep ! .getContext('2d') */

    that.passThrough = passThrough

    that.spawnedPointerBelongings = fromEmptySpawnedPointerBelongins()

    that.throughPointerBelongings = function (pointerBelongingsInstance) {
        that.pointerBelongings = pointerBelongingsInstance
    }

    that.assignCoordinates = function () {
        // keep
    }

    that.constructPointerBelongings = function (pointerBelongingsCollectionOfFour) {
        let that = this
        that.throughPointerBelongingsAtTopLeft = pointerBelongingsCollectionOfFour.pointerBelongingsAtTopLeft
        that.throughPointerBelongingsAtBottomLeft = pointerBelongingsCollectionOfFour.pointerBelongingsAtBottomLeft

        that.throughPointerBelongingsAtBottomRight = pointerBelongingsCollectionOfFour.pointerBelongingsAtBottomRight
        that.throughPointerBelongingsAtRightTop = pointerBelongingsCollectionOfFour.pointerBelongingsAtRightTop
    }

    that.assignKnotToKnotAtProfileStatement = function (knotAtProfileStatement) {
        that.throughKnotConnectedToProfile = knotAtProfileStatement
    }

    that.assignKnotToKnotAtFrontStatement = function (knotAtFrontStatement) {
        that.throughKnotConnectedToFront = knotAtFrontStatement
    }

    that.assignKnotToKnotFromBottomStatement = function (knotFromBottomStatement) {
        let knotLocate = that
        // keep !

        knotLocate.throughKnotConnectedToBottomStatement = knotFromBottomStatement
    }
}

function Pencil() {
    let that = this
    // follow viewported-knot-at-knot-labirint

    // keep update-stack
    let knot

    let accuratePencil = new AccuratePencil()
    // keep
    that.fromAccuratePencil = function () {
        // keep !
        return accuratePencil
    }
    // keep !

    that.passThroughCrowd = function () {
        return that
    }
    that.joinLoop = function () {
        return that
    }
    that.compact = function () {
        return that
    }

    that.drawFromBottom = function () {
        that.draw()
    }

    let knotThrough
    that.intoPointerBelongingsCollection = function () {
        let pointerBelongingsCollectionOfFour = {
            pointerBelongingsAtTopLeft: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft,
            pointerBelongingsAtBottomLeft: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft,
            pointerBelongingsAtBottomRight: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight,
            pointerBelongingsAtRightTop: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtRightTop
        }

        // keep

        return pointerBelongingsCollectionOfFour
    }
    that.drawThrough = function (knotThroughInstance) {
        knotThrough = knotThroughInstance

        // keep
        // knotThroughInstance.spawnedPointerBelongings
        knotThrough.compute().constructPointerBelongingsFromBottom(knotThrough.spawnedPointerBelongings)
        // take computed pointerBelongings topLeft, bottomLeft, bottomRight, rightTop

        // keep
        return that
    }

    that.useKnot = function (knotInstance) {
        knot = knotInstance
    }

    that.useEchoLocator = function (echoLocator) {
        that.echoLocator = echoLocator
        // keep !
        that.echoLocator.usePointerBelongings(knot.pointerBelongings)
        that.echoLocator.useRelativeSize(knot)

        // keep
        that.echoLocator.connectTo(knot)
    }
    // keep !


    // keep bind-stack !

    let scene = this

    // queueKnot
    let dictQueueKnot = {}

    let queueKnot = []

    let chosenScene

    let takeOne = function (arr) {
        return arr.splice(arr.length - 1, 1)[0]
    }

    that.constructKnot = function () {
        return takeOne(dictQueueKnot[chosenScene])
    }

    that.rememberSample = function (scene, knot) {
        // keep
        if(dictQueueKnot[scene]) {
            // keep !
        } else {
            dictQueueKnot[scene] = []
        }
        dictQueueKnot[scene].push(knot)
    }

    that.useScene = function (providedScene) {
        chosenScene = providedScene
    }

    that.putKnotConnectedToBottomStatement = function (knotInstance) {
        // pencil verifies that it is connected to bottom-statement
        queueKnot.push(knotInstance)
    }

    that.provideScene = function () {
        return scene
    }

    let viewportPosition

    that.useViewport = function (viewportPointerBelongingsAtVerticalPosition, viewportPointerBelongingsAtDistance, viewportPointerBelongingsAtHorizontalPosition) {
        let localViewport = JSON.parse(JSON.stringify({
            atVerticalPosition: viewportPointerBelongingsAtVerticalPosition,
            atDistance: viewportPointerBelongingsAtDistance,
            atHorizontalPosition: viewportPointerBelongingsAtHorizontalPosition
        }))
        // keep

        viewportPosition = localViewport
    }

    that.draw = function () {
        // knotFromCubicProject

        // keep !

        // and there. it is program way, knot human way
        for(let i = 0; i < queueKnot.length; i++) {
            // chosen scene we take to ourself
            // it is a memory protection and a protection from high coupling
            queueKnot[i]['passThrough'](queueKnot[i]['spawnedPointerBelongings'])
        }

        // pointerBelongings
    }

    // bind !
}

window['@pencil/draft-compact-knot-locate-draftar-from-bottom-statement'] = {
    Pencil,
    DraftFabrikk,

    KnotFromBottomStatement
}