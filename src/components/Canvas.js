import React, { Component } from 'react'

export default class extends Component {
    canvas = React.createRef()
    mouseActive = false
    mousePos = {}
    img = new Image()

    componentDidMount() {
        this.ctx = this.canvas.current.getContext('2d')
    }

    onMouseDown = e => {
        this.mouseActive = true
        this.mousePos = { x: e.clientX, y: e.clientY }
    }

    onMouseUp = e => {
        this.mouseActive = false
        this.mousePos = {}
    }

    onMouseMove = e => {
        if (this.mouseActive) {
            const _mousePos = { x: e.clientX, y: e.clientY }
            if (this.dw > this.ctx.canvas.width)
                this.dx = this.dx + _mousePos.x - this.mousePos.x

            if (this.dh > this.ctx.canvas.height)
                this.dy = this.dy + _mousePos.y - this.mousePos.y

            this.correct()
            this.draw()
            this.mousePos = { x: e.clientX, y: e.clientY }
        }
    }

    onWheel = e => {
        let r
        if (e.deltaY < 0) r = 1.1
        if (e.deltaY > 0) r = 0.9
        this.dx *= r
        this.dy *= r
        this.dw *= r
        this.dh *= r

        if (
            Math.min(this.dw, this.dh) <
            Math.max(this.ctx.canvas.width, this.ctx.canvas.height)
        ) {
            this.dw = this.img.width * this.r
            this.dh = this.img.height * this.r
        }

        this.correct()
        this.draw()
    }

    correct = () => {
        if (this.dx > 0 || this.dx === NaN) this.dx = 0
        if (this.dw + this.dx < this.ctx.canvas.width)
            this.dx = this.ctx.canvas.width - this.dw
        if (this.dy > 0 || this.dy === NaN) this.dy = 0
        if (this.dh + this.dy < this.ctx.canvas.height)
            this.dy = this.ctx.canvas.height - this.dh
        if (
            this.dx === NaN ||
            this.dy === NaN ||
            this.dw === NaN ||
            this.dh === NaN
        )
            this.reset()
    }

    reset = () => {
        this.r =
            Math.max(this.ctx.canvas.width, this.ctx.canvas.height) /
            Math.min(this.img.width, this.img.height)

        this.dw = this.img.width * this.r
        this.dh = this.img.height * this.r
        this.dx = -(this.dw - this.ctx.canvas.width) / 2
        this.dy = -(this.dh - this.ctx.canvas.height) / 2
    }

    save = () => {
        if (this.props.callback) {
            // resize before saving to Data URL
            if (this.props.saveWidth && this.props.saveHeight) {
                const { ctx } = this
                const r =
                    Math.max(this.props.saveWidth, this.props.saveHeight) /
                    Math.max(ctx.canvas.width, ctx.canvas.width)

                ctx.canvas.width = this.props.saveWidth
                ctx.canvas.height = this.props.saveHeight

                this.dw *= r
                this.dh *= r
                this.dx *= r
                this.dy *= r

                this.draw()
            }
            const data = this.canvas.current.toDataURL('image/jpeg', 0.5)
            this.props.callback(data)
        }
    }

    draw = (ctx, x, y, w, h) => {
        ctx = ctx ? ctx : this.img
        x = x ? x : this.dx
        y = y ? y : this.dy
        w = w ? w : this.dw
        h = h ? h : this.dh
        this.ctx.fillStyle = '#ffffff'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.ctx.drawImage(ctx, x, y, w, h)
    }

    render() {
        const { className } = this.props
        if (this.props.src) {
            const { ctx, img } = this
            img.src = this.props.src
            img.onload = () => {
                ctx.canvas.height = this.props.height
                ctx.canvas.width = this.props.width

                this.reset()

                // ctx.drawImage(img, dx, dy, dw, dh)
                this.draw(img, this.dx, this.dy, this.dw, this.dh)
            }
        }
        return (
            <canvas
                className={className}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseMove={this.onMouseMove}
                onWheel={this.onWheel}
                ref={this.canvas}
            />
        )
    }
}
