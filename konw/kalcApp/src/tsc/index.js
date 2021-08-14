class Project {
    constructor() {
        this.inputsData = [];
        this.init();
    }
    init() {
        this.assignData();
        this.assignEvents();
    }
    assignData() {
        var _a;
        this.buttons = (_a = document.getElementById("inputs-container")) === null || _a === void 0 ? void 0 : _a.querySelectorAll("input");
    }
    assignEvents() {
        if (this.buttons != undefined) {
            this.buttons.forEach((button) => {
                button.addEventListener("input", () => {
                    this.updateInputsData();
                    this.updateData();
                });
            });
        }
    }
    updateInputsData() {
        let inputsData = [];
        if (this.buttons != undefined) {
            this.buttons.forEach((button) => {
                if (this.isNumber(button.value))
                    inputsData.push(Number(button.value));
            });
        }
        this.inputsData = inputsData;
    }
    countMin() {
        return Math.min.apply(Math, this.inputsData);
    }
    countMax() {
        return Math.max.apply(Math, this.inputsData);
    }
    countAvg() {
        return this.countSum() / this.inputsData.length;
    }
    countSum() {
        let sum = 0;
        this.inputsData.forEach(val => {
            sum += val;
        });
        return sum;
    }
    updateData() {
        let inpSum = document.querySelector("#sum");
        let inpAvg = document.querySelector("#avg");
        let inpMin = document.querySelector("#min");
        let inpMax = document.querySelector("#max");
        if (inpSum != null) {
            inpSum.value = String(this.countSum());
        }
        if (inpAvg != null) {
            inpAvg.value = String(this.countAvg());
        }
        if (inpMin != null) {
            inpMin.value = String(this.countMin());
        }
        if (inpMax != null) {
            inpMax.value = String(this.countMax());
        }
    }
    isNumber(value) {
        return ((value != null) && (value !== '') && !isNaN(Number(value.toString())));
    }
}
let project = new Project();
//# sourceMappingURL=index.js.map