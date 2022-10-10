
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU3Rhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF3Q0M7UUF0Q0csNkdBQTZHO1FBRTdHLGdCQUFVLEdBQVcsQ0FBQyxDQUFDOztJQW9DM0IsQ0FBQztJQWpDRyxvQ0FBaUIsR0FBakI7UUFDSSxvQ0FBb0M7UUFDcEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLFNBQVMsR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHNEQUFzRDtRQUN0RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxpR0FBaUc7UUFDakcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFckMsNENBQTRDO1FBQzVDLGNBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxDLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLG9IQUFvSDtRQUNwSCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDM0MseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDZCxPQUFPO1NBQ1Y7UUFDRCx1RUFBdUU7UUFDdkUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxHQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxjQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDdEYsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFuQ0Q7UUFEQyxRQUFRO2dEQUNjO0lBSk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdDNUI7SUFBRCxlQUFDO0NBeENELEFBd0NDLENBeENxQyxFQUFFLENBQUMsU0FBUyxHQXdDakQ7a0JBeENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gS2hpIGtob+G6o25nIGPDoWNoIGdp4buvYSBuZ8O0aSBzYW8gdsOgIG5ow6JuIHbhuq10IGNow61uaCBuaOG7jyBoxqFuIGdpw6EgdHLhu4sgbsOgeSwgdmnhu4djIHRodSB0aOG6rXAgxJFp4buDbSBz4bq9IMSRxrDhu6NjIGhvw6BuIHRow6BuaFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwaWNrUmFkaXVzOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBnZXRQbGF5ZXJEaXN0YW5jZSgpe1xyXG4gICAgICAgIC8vIHjDoWMgxJHhu4tuaCBraG/huqNuZyBjw6FjaCB0aGVvIFBsYXllciBcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gY2MudjMoMCwxLDEpO1xyXG4gICAgICAgIHBsYXllclBvcyA9IEdhbWUuYXJndW1lbnRzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllclBvcyk7XHJcbiAgICAgICAgLy8gVMOtbmgga2hv4bqjbmcgY8OhY2ggZ2nhu69hIGhhaSBuw7p0IHRoZW8gduG7iyB0csOtIGPhu6dhIGNow7puZ1xyXG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGlja2VkKCl7XHJcbiAgICAgICAgLy9LaGkgbmjhu69uZyBuZ8O0aSBzYW8gYuG6r3QgxJHhuqd1IMSRxrDhu6NjIHRodSB0aOG6rXAsIHThu7EgxJHhu5luZyBn4buNaSB0cm9uZyBHYW1lIHNjcmlwdCDEkeG7gyB04bqhbyBt4buZdCBuZ8O0aSBzYW8gbeG7m2lcclxuICAgICAgICBHYW1lLmFyZ3VtZW50cy5wbGF5ZXIuc3Bhd25OZXdTdGFyKCk7XHJcblxyXG4gICAgICAgIC8vIEfhu41pIHBoxrDGoW5nIHBow6FwIHTDrW5oIMSRaeG7g20gY+G7p2EgR2FtZSBzY3JpcHRcclxuICAgICAgICBHYW1lLmFyZ3VtZW50cy5wbGF5ZXIuZ2FpblNjb3JlKCk7XHJcblxyXG4gICAgICAgIC8vIFNhdSDEkcOzIHBow6EgaOG7p3kgbm9kZSBj4bunYSBuZ8O0aSBzYW8gaGnhu4duIHThuqFpXHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIFjDoWMgxJHhu4tuaCB4ZW0ga2hv4bqjbmcgY8OhY2ggZ2nhu69hIG5nw7RpIHNhbyB2w6AgbmjDom4gduG6rXQgY2jDrW5oIGPDsyBuaOG7jyBoxqFuIGtob+G6o25nIGPDoWNoIHRodSB0aOG6rXAgY2hvIG3hu5dpIGtodW5nIGjDrG5oIGtow7RuZ1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLnBpY2tSYWRpdXMpe1xyXG4gICAgICAgICAgICAvLyBn4buNaSBow6BuaCDEkeG7mW5nIHRodSB0aOG6rXBcclxuICAgICAgICAgICAgdGhpcy5vblBpY2tlZDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBD4bqtcCBuaOG6rXQgxJHhu5kgdHJvbmcgc3Xhu5F0IGPhu6dhIG5nw7RpIHNhbyB0aGVvIHRo4budaSBnaWFuIHRyb25nIEdhbWUgc2NyaXB0XHJcbiAgICAgICAgdmFyIG9wYWNpdHlSYXRpbyA9IDEgLSBHYW1lLmFyZ3VtZW50cy5wbGF5ZXIudGltZXIvR2FtZS5hcmd1bWVudHMucGxheWVyLnN0YXJEdXJhdGlvbjtcclxuICAgICAgICB2YXIgbWluT3BhY2l0eSA9IDUwO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gbWluT3BhY2l0eSArIE1hdGguZmxvb3Iob3BhY2l0eVJhdGlvICogKDI1NSAtIG1pbk9wYWNpdHkpKTtcclxuICAgIH1cclxufVxyXG4iXX0=