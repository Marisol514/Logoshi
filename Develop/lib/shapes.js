class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Method not implemented');
    }
}

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200">
            <polygon points="150,20 100,180 200,180" fill="${this.color}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.color}">TEXT</text>
        </svg>`;
    }
}

class Circle extends Shape {
    render() {
        return `<svg width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="${this.color}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.color}">TEXT</text>
        </svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<svg width="300" height="200">
            <rect width="200" height="200" x="50" y="0" fill="${this.color}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${this.color}">TEXT</text>
        </svg>`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };
