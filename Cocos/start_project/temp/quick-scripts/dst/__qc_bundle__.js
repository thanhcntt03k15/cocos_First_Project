
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Game');
require('./assets/Scripts/Player');
require('./assets/Scripts/Star');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da9625KoY1OebxEs/9VaBFW', 'Game');
// Scripts/Game.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Thuộc tính trích dẫn tài nguyên prefab của các ngôi sao
        _this.starPrefab = null;
        // Tỉ lệ ngẫu nhiên thời gian biến mất của các ngôi sao
        _this.maxStarDuration = 0;
        _this.minStarDuration = 0;
        // Node lấy thông tin mặt đất để xác định độ cao của ngôi sao
        _this.ground = null;
        // Node lấy thông tin của người chơi 
        _this.player = null;
        // Tham chiếu điểm nhãn
        _this.scoreDisplay = null;
        return _this;
    }
    Game.prototype.onLoad = function () {
        // Lấy điểm neo của mặt đất trên trục y
        this.groundY = this.ground.y + this.ground.height / 2;
        // Tạo ngôi sao mới
        this.spawnNewStar();
        // Khởi tạo điểm
        this.score = 0;
        // Khởi tạo thời gian
        this.timer = 0;
        this.starDuration = 0;
    };
    Game.prototype.spawnNewStar = function () {
        // tạo node sao mới trong cảnh
        var newStar = cc.instantiate(this.starPrefab);
        // đặt node mới vào bên dưới canvas
        this.node.addChild(newStar);
        // Tạo tọa độ ngẫu nhiên cho ngôi sao
        newStar.setPosition(this.getNewStarPosition());
        // lưu tham chiếu của Game object trên tập lệnh Star
        newStar.getComponent('Star').game = this;
        // làm mới thời gian, chọn ngẫu nhiên một giá trị theo tỉ lệ xuất hiện của sao
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    };
    Game.prototype.getNewStarPosition = function () {
        var rand = 0;
        // theo vị trí trên mặt đất và độ cao khi nhảy của nhân vật, lấy ngẫu nhiên một điểm neo của ngôi sao trên trục y
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        // theo chiệu rộng của màn hình lấy ngẫu nhiên điểm neo của ngôi sao trên trục x
        var maxX = this.node.width / 2;
        var randX = (Math.random() - 0.5) * 2 * maxX;
        // Trả lại điểm neo cho ngôi sao
        return cc.v2(randX, randY);
    };
    Game.prototype.gainScore = function () {
        this.score += 1;
        // cập nhật điểm số cho scoreDisplay Label
        this.scoreDisplay.string = 'Score: ' + this.score;
        // Bật âm thanh ghi bàn
        cc.audioEngine.playEffect(this.scoreAudio, false);
    };
    Game.prototype.update = function (dt) {
        // cập nhật thời gian sau mỗi frame, khi một ngôi sao mới không được tạo sau khi quá thời lượng
        // gọi ra hàm thua cuộc của trò chơi
        if (this.timer > this.starDuration) {
            this.gameOver;
            return;
        }
        this.timer += dt;
    };
    Game.prototype.gameOver = function () {
        // Dừng hành động nhảy của nhân vật
        this.player.stopAllActions();
        // khởi động lại cảnh 
        cc.director.loadScene('game');
    };
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "starPrefab", void 0);
    __decorate([
        property
    ], Game.prototype, "maxStarDuration", void 0);
    __decorate([
        property
    ], Game.prototype, "minStarDuration", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "ground", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "player", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "scoreDisplay", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "scoreAudio", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTRHQztRQTFHRywwREFBMEQ7UUFFMUQsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsdURBQXVEO1FBRXZELHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRzVCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLDZEQUE2RDtRQUU3RCxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLHFDQUFxQztRQUVyQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBSXZCLHVCQUF1QjtRQUV2QixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFtRmpDLENBQUM7SUF4RUcscUJBQU0sR0FBTjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztRQUNuRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVmLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksOEJBQThCO1FBQzlCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FB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QUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIFRodeG7mWMgdMOtbmggdHLDrWNoIGThuqtuIHTDoGkgbmd1ecOqbiBwcmVmYWIgY+G7p2EgY8OhYyBuZ8O0aSBzYW9cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzdGFyUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vIFThu4kgbOG7hyBuZ+G6q3Ugbmhpw6puIHRo4budaSBnaWFuIGJp4bq/biBt4bqldCBj4bunYSBjw6FjIG5nw7RpIHNhb1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXhTdGFyRHVyYXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtaW5TdGFyRHVyYXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gTm9kZSBs4bqleSB0aMO0bmcgdGluIG3hurd0IMSR4bqldCDEkeG7gyB4w6FjIMSR4buLbmggxJHhu5kgY2FvIGPhu6dhIG5nw7RpIHNhb1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIE5vZGUgbOG6pXkgdGjDtG5nIHRpbiBj4bunYSBuZ8aw4budaSBjaMahaSBcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBncm91bmRZOiBudW1iZXI7XHJcblxyXG4gICAgLy8gVGhhbSBjaGnhur91IMSRaeG7g20gbmjDo25cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNjb3JlRGlzcGxheTogY2MuTGFiZWw9IG51bGw7XHJcblxyXG4gICAgc2NvcmU6IG51bWJlcjtcclxuXHJcbiAgICB0aW1lcjogbnVtYmVyO1xyXG5cclxuICAgIHN0YXJEdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzY29yZUF1ZGlvOiBjYy5BdWRpb0NsaXAgO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIC8vIEzhuqV5IMSRaeG7g20gbmVvIGPhu6dhIG3hurd0IMSR4bqldCB0csOqbiB0cuG7pWMgeVxyXG4gICAgICAgIHRoaXMuZ3JvdW5kWT0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodC8yOyBcclxuICAgICAgICAvLyBU4bqhbyBuZ8O0aSBzYW8gbeG7m2lcclxuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xyXG4gICAgICAgIC8vIEto4bufaSB04bqhbyDEkWnhu4NtXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcblxyXG4gICAgICAgIC8vIEto4bufaSB04bqhbyB0aOG7nWkgZ2lhblxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25OZXdTdGFyKCl7XHJcbiAgICAgICAgLy8gdOG6oW8gbm9kZSBzYW8gbeG7m2kgdHJvbmcgY+G6o25oXHJcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG4gICAgICAgIC8vIMSR4bq3dCBub2RlIG3hu5tpIHbDoG8gYsOqbiBkxrDhu5tpIGNhbnZhc1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICAvLyBU4bqhbyB04buNYSDEkeG7mSBuZ+G6q3Ugbmhpw6puIGNobyBuZ8O0aSBzYW9cclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xyXG4gICAgICAgIC8vIGzGsHUgdGhhbSBjaGnhur91IGPhu6dhIEdhbWUgb2JqZWN0IHRyw6puIHThuq1wIGzhu4duaCBTdGFyXHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gbMOgbSBt4bubaSB0aOG7nWkgZ2lhbiwgY2jhu41uIG5n4bqrdSBuaGnDqm4gbeG7mXQgZ2nDoSB0cuG7iyB0aGVvIHThu4kgbOG7hyB4deG6pXQgaGnhu4duIGPhu6dhIHNhb1xyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld1N0YXJQb3NpdGlvbigpe1xyXG4gICAgICAgIHZhciByYW5kID0gMDtcclxuICAgICAgICAvLyB0aGVvIHbhu4sgdHLDrSB0csOqbiBt4bq3dCDEkeG6pXQgdsOgIMSR4buZIGNhbyBraGkgbmjhuqN5IGPhu6dhIG5ow6JuIHbhuq10LCBs4bqleSBuZ+G6q3Ugbmhpw6puIG3hu5l0IMSRaeG7g20gbmVvIGPhu6dhIG5nw7RpIHNhbyB0csOqbiB0cuG7pWMgeVxyXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQgKzUwO1xyXG5cclxuICAgICAgICAvLyB0aGVvIGNoaeG7h3UgcuG7mW5nIGPhu6dhIG3DoG4gaMOsbmggbOG6pXkgbmfhuqt1IG5oacOqbiDEkWnhu4NtIG5lbyBj4bunYSBuZ8O0aSBzYW8gdHLDqm4gdHLhu6VjIHhcclxuICAgICAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aC8yO1xyXG4gICAgICAgIHZhciByYW5kWCA9IChNYXRoLnJhbmRvbSgpLTAuNSkgKiAyICogbWF4WDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBUcuG6oyBs4bqhaSDEkWnhu4NtIG5lbyBjaG8gbmfDtGkgc2FvXHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLHJhbmRZKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2FpblNjb3JlKCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuXHJcbiAgICAgICAgLy8gY+G6rXAgbmjhuq10IMSRaeG7g20gc+G7kSBjaG8gc2NvcmVEaXNwbGF5IExhYmVsXHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlOiAnICsgdGhpcy5zY29yZTtcclxuXHJcbiAgICAgICAgLy8gQuG6rXQgw6JtIHRoYW5oIGdoaSBiw6BuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBj4bqtcCBuaOG6rXQgdGjhu51pIGdpYW4gc2F1IG3hu5dpIGZyYW1lLCBraGkgbeG7mXQgbmfDtGkgc2FvIG3hu5tpIGtow7RuZyDEkcaw4bujYyB04bqhbyBzYXUga2hpIHF1w6EgdGjhu51pIGzGsOG7o25nXHJcblxyXG4gICAgICAgIC8vIGfhu41pIHJhIGjDoG0gdGh1YSBjdeG7mWMgY+G7p2EgdHLDsiBjaMahaVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKXtcclxuICAgICAgICAvLyBE4burbmcgaMOgbmggxJHhu5luZyBuaOG6o3kgY+G7p2EgbmjDom4gduG6rXRcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIC8vIGto4bufaSDEkeG7mW5nIGzhuqFpIGPhuqNuaCBcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '230a2dHXc5OI5D/hk+mLbCJ', 'Player');
// Scripts/Player.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jumpHeight = 150;
        _this.jumpDuration = 0.3;
        _this.maxMoveSpeed = 400;
        _this.accel = 1000;
        _this.xSpeed = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        // Khởi tạo hành động nhảy
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start();
        // Công tắc hướng gia tốc
        this.accLeft = false;
        this.accRight = false;
        // Vận tốc ngang hiện tại của nhân vậy chính
        this.xSpeed = 0;
        // Khởi tạo đầu vào từ bàn phím
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.onDestroy = function () {
        // Hủy theo dõi dữ liệu nhập bằng bàn phím
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        // Cập nhật tốc độ từng khung hình theo hướng gia tốc hiện tại.
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // Hạn chế tốc độ di chuyển của nhân vật ở tốc độ tối đa
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // Nếu tốc độ đạt đến giới hạn, sử dụng tốc độ tối đa cho chính nó
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }
        // Cập nhật  vị trí của nhân vật chính theo tốc độ hiện tại
        this.node.x += this.xSpeed * dt;
    };
    // update (dt) {}
    NewClass.prototype.runJumpAction = function () {
        // Nhảy lên
        var jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sinOut' });
        // Nhảy xuống
        var jumpDown = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sinIn' });
        // Tạo easing và thực hiện hành động
        var tween = cc.tween()
            // Thực hiện hành động theo thứ tự jumpUp, jumpDown
            .sequence(jumpUp, jumpDown)
            // Thêm hàm 'playJumpSound()' được xác định khi hành động kết thúc
            .call(this.playJumpSound, this);
        // Lặp lại hành động
        return cc.tween().repeatForever(tween);
    };
    NewClass.prototype.playJumpSound = function () {
        // Gọi công cụ âm thanh để phát âm thanh
        cc.audioEngine.playEffect(this.jumpAudio, false);
    };
    NewClass.prototype.onKeyDown = function (event) {
        // Cài một nút khi chạy hàm
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        // Tắt nút khi chạy hàm
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    };
    __decorate([
        property
    ], NewClass.prototype, "jumpHeight", void 0);
    __decorate([
        property
    ], NewClass.prototype, "jumpDuration", void 0);
    __decorate([
        property
    ], NewClass.prototype, "maxMoveSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "accel", void 0);
    __decorate([
        property
    ], NewClass.prototype, "xSpeed", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "jumpAudio", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBc0hDO1FBbkhHLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBR3pCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBRzNCLFdBQUssR0FBVyxJQUFJLENBQUM7UUFNckIsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUFvR3ZCLENBQUM7SUEvRkcseUJBQU0sR0FBTjtRQUVJLDBCQUEwQjtRQUMxQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTdDLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0Qiw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFaEIsK0JBQStCO1FBQy9CLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFD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QyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsS0FBSztRQUVULHVCQUF1QjtRQUN2QixRQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBbEhEO1FBREMsUUFBUTtnREFDZ0I7SUFHekI7UUFEQyxRQUFRO2tEQUNrQjtJQUczQjtRQURDLFFBQVE7a0RBQ2tCO0lBRzNCO1FBREMsUUFBUTsyQ0FDWTtJQU1yQjtRQURDLFFBQVE7NENBQ1U7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsrQ0FDRTtJQXJCUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0g1QjtJQUFELGVBQUM7Q0F0SEQsQUFzSEMsQ0F0SHFDLEVBQUUsQ0FBQyxTQUFTLEdBc0hqRDtrQkF0SG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGp1bXBIZWlnaHQ6IG51bWJlciA9IDE1MDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGp1bXBEdXJhdGlvbjogbnVtYmVyID0gMC4zO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbWF4TW92ZVNwZWVkOiBudW1iZXIgPSA0MDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBhY2NlbDogbnVtYmVyID0gMTAwMDtcclxuXHJcbiAgICBhY2NMZWZ0OiBib29sZWFuO1xyXG4gICAgYWNjUmlnaHQ6IGJvb2xlYW47XHJcblxyXG4gICAgQHByb3BlcnR5ICBcclxuICAgIHhTcGVlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAganVtcEF1ZGlvOiBjYy5BdWRpb0NsaXAgO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG5cclxuICAgICAgICAvLyBLaOG7n2kgdOG6oW8gaMOgbmggxJHhu5luZyBuaOG6o3lcclxuICAgICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyBDw7RuZyB04bqvYyBoxrDhu5tuZyBnaWEgdOG7kWNcclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFbhuq1uIHThu5FjIG5nYW5nIGhp4buHbiB04bqhaSBj4bunYSBuaMOibiB24bqteSBjaMOtbmhcclxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcblxyXG4gICAgICAgIC8vIEto4bufaSB04bqhbyDEkeG6p3UgdsOgbyB04burIGLDoG4gcGjDrW1cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBI4buneSB0aGVvIGTDtWkgZOG7ryBsaeG7h3Ugbmjhuq1wIGLhurFuZyBiw6BuIHBow61tXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBD4bqtcCBuaOG6rXQgdOG7kWMgxJHhu5kgdOG7q25nIGtodW5nIGjDrG5oIHRoZW8gaMaw4bubbmcgZ2lhIHThu5FjIGhp4buHbiB04bqhaS5cclxuICAgICAgICBpZih0aGlzLmFjY0xlZnQpe1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYWNjUmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEjhuqFuIGNo4bq/IHThu5FjIMSR4buZIGRpIGNodXnhu4NuIGPhu6dhIG5ow6JuIHbhuq10IOG7nyB04buRYyDEkeG7mSB04buRaSDEkWFcclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpe1xyXG4gICAgICAgICAgICAvLyBO4bq/dSB04buRYyDEkeG7mSDEkeG6oXQgxJHhur9uIGdp4bubaSBo4bqhbiwgc+G7rSBk4bulbmcgdOG7kWMgxJHhu5kgdOG7kWkgxJFhIGNobyBjaMOtbmggbsOzXHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZC8gTWF0aC5hYnModGhpcy54U3BlZWQpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLy8gQ+G6rXAgbmjhuq10ICB24buLIHRyw60gY+G7p2EgbmjDom4gduG6rXQgY2jDrW5oIHRoZW8gdOG7kWMgxJHhu5kgaGnhu4duIHThuqFpXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gICAgcnVuSnVtcEFjdGlvbigpe1xyXG4gICAgICAgIC8vIE5o4bqjeSBsw6puXHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHt5OiB0aGlzLmp1bXBIZWlnaHR9LCB7ZWFzaW5nOiAnc2luT3V0J30pO1xyXG5cclxuICAgICAgICAvLyBOaOG6o3kgeHXhu5FuZ1xyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHt5OiAtdGhpcy5qdW1wSGVpZ2h0fSwge2Vhc2luZzogJ3NpbkluJ30pO1xyXG5cclxuICAgICAgICAvLyBU4bqhbyBlYXNpbmcgdsOgIHRo4buxYyBoaeG7h24gaMOgbmggxJHhu5luZ1xyXG4gICAgICAgIHZhciB0d2VlbiA9IGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRo4buxYyBoaeG7h24gaMOgbmggxJHhu5luZyB0aGVvIHRo4bupIHThu7EganVtcFVwLCBqdW1wRG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaMOqbSBow6BtICdwbGF5SnVtcFNvdW5kKCknIMSRxrDhu6NjIHjDoWMgxJHhu4tuaCBraGkgaMOgbmggxJHhu5luZyBr4bq/dCB0aMO6Y1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwodGhpcy5wbGF5SnVtcFNvdW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTOG6t3AgbOG6oWkgaMOgbmggxJHhu5luZ1xyXG4gICAgICAgIHJldHVybiBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4pO1xyXG5cclxuICAgIH1cclxuICAgIHBsYXlKdW1wU291bmQoKXtcclxuICAgICAgICAvLyBH4buNaSBjw7RuZyBj4bulIMOibSB0aGFuaCDEkeG7gyBwaMOhdCDDom0gdGhhbmhcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KXtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDw6BpIG3hu5l0IG7DunQga2hpIGNo4bqheSBow6BtXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChldmVudCl7XHJcblxyXG4gICAgICAgIC8vIFThuq90IG7DunQga2hpIGNo4bqheSBow6BtXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
