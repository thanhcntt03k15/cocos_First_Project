"use strict";
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
        // Kh???i t???o h??nh ?????ng nh???y
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start();
        // C??ng t???c h?????ng gia t???c
        this.accLeft = false;
        this.accRight = false;
        // V???n t???c ngang hi???n t???i c???a nh??n v???y ch??nh
        this.xSpeed = 0;
        // Kh???i t???o ?????u v??o t??? b??n ph??m
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.onDestroy = function () {
        // H???y theo d??i d??? li???u nh???p b???ng b??n ph??m
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        // C???p nh???t t???c ????? t???ng khung h??nh theo h?????ng gia t???c hi???n t???i.
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // H???n ch??? t???c ????? di chuy???n c???a nh??n v???t ??? t???c ????? t???i ??a
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // N???u t???c ????? ?????t ?????n gi???i h???n, s??? d???ng t???c ????? t???i ??a cho ch??nh n??
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }
        // C???p nh???t  v??? tr?? c???a nh??n v???t ch??nh theo t???c ????? hi???n t???i
        this.node.x += this.xSpeed * dt;
    };
    // update (dt) {}
    NewClass.prototype.runJumpAction = function () {
        // Nh???y l??n
        var jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sinOut' });
        // Nh???y xu???ng
        var jumpDown = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sinIn' });
        // T???o easing v?? th???c hi???n h??nh ?????ng
        var tween = cc.tween()
            // Th???c hi???n h??nh ?????ng theo th??? t??? jumpUp, jumpDown
            .sequence(jumpUp, jumpDown)
            // Th??m h??m 'playJumpSound()' ???????c x??c ?????nh khi h??nh ?????ng k???t th??c
            .call(this.playJumpSound, this);
        // L???p l???i h??nh ?????ng
        return cc.tween().repeatForever(tween);
    };
    NewClass.prototype.playJumpSound = function () {
        // G???i c??ng c??? ??m thanh ????? ph??t ??m thanh
        cc.audioEngine.playEffect(this.jumpAudio, false);
    };
    NewClass.prototype.onKeyDown = function (event) {
        // C??i m???t n??t khi ch???y h??m
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
        // T???t n??t khi ch???y h??m
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