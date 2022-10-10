"use strict";
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