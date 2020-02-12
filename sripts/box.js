function Box(x, y, W, H = box_h) {
    this.x = x;
    this.y = y;
    this.w = W;
    this.h = H;
    this.m = false;

    this.draw = function () {
        ctx.beginPath();
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 0.6;
        ctx.fillStyle = clr;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    this.move = function () {
        if (this.m) {
            this.x += v;
            if (this.x > w || this.x < -this.w) {
                v = -v;
            }
        }
    }
}