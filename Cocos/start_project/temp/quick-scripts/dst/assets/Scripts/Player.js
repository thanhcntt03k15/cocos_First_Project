
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