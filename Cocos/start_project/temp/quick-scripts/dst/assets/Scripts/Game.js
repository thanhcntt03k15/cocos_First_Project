
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