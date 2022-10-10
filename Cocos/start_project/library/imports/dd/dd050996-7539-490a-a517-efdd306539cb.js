"use strict";
cc._RF.push(module, 'dd050mWdTlJCqUX790wZTnL', 'Star');
// Scripts/Star.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Khi khoảng cách giữa ngôi sao và nhân vật chính nhỏ hơn giá trị này, việc thu thập điểm sẽ được hoàn thành
        _this.pickRadius = 0;
        return _this;
    }
    NewClass.prototype.getPlayerDistance = function () {
        // xác định khoảng cách theo Player 
        var playerPos = cc.v3(0, 1, 1);
        playerPos = Game_1.default.arguments.player.getPosition();
        console.log(playerPos);
        // Tính khoảng cách giữa hai nút theo vị trí của chúng
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    };
    NewClass.prototype.onPicked = function () {
        //Khi những ngôi sao bắt đầu được thu thập, tự động gọi trong Game script để tạo một ngôi sao mới
        Game_1.default.arguments.player.spawnNewStar();
        // Gọi phương pháp tính điểm của Game script
        Game_1.default.arguments.player.gainScore();
        // Sau đó phá hủy node của ngôi sao hiện tại
        this.node.destroy();
    };
    NewClass.prototype.update = function (dt) {
        // Xác định xem khoảng cách giữa ngôi sao và nhân vật chính có nhỏ hơn khoảng cách thu thập cho mỗi khung hình không
        if (this.getPlayerDistance() < this.pickRadius) {
            // gọi hành động thu thập
            this.onPicked;
            return;
        }
        // Cập nhật độ trong suốt của ngôi sao theo thời gian trong Game script
        var opacityRatio = 1 - Game_1.default.arguments.player.timer / Game_1.default.arguments.player.starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    };
    __decorate([
        property
    ], NewClass.prototype, "pickRadius", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();