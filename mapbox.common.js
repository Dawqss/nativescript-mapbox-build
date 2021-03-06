"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var content_view_1 = require("tns-core-modules/ui/content-view");
var MapStyle;
(function (MapStyle) {
    MapStyle[MapStyle["DARK"] = "dark"] = "DARK";
    MapStyle[MapStyle["OUTDOORS"] = "outdoors"] = "OUTDOORS";
    MapStyle[MapStyle["LIGHT"] = "light"] = "LIGHT";
    MapStyle[MapStyle["SATELLITE"] = "satellite"] = "SATELLITE";
    MapStyle[MapStyle["SATELLITE_STREETS"] = "satellite_streets"] = "SATELLITE_STREETS";
    MapStyle[MapStyle["STREETS"] = "streets"] = "STREETS";
    MapStyle[MapStyle["TRAFFIC_DAY"] = "traffic_day"] = "TRAFFIC_DAY";
    MapStyle[MapStyle["TRAFFIC_NIGHT"] = "traffic_night"] = "TRAFFIC_NIGHT";
})(MapStyle = exports.MapStyle || (exports.MapStyle = {}));
var MapboxCommon = (function () {
    function MapboxCommon() {
    }
    MapboxCommon.merge = function (obj1, obj2) {
        var result = {};
        for (var i in obj1) {
            if ((i in obj2) && (typeof obj1[i] === "object") && (i !== null)) {
                result[i] = this.merge(obj1[i], obj2[i]);
            }
            else {
                result[i] = obj1[i];
            }
        }
        for (var i in obj2) {
            if (i in result) {
                continue;
            }
            result[i] = obj2[i];
        }
        return result;
    };
    MapboxCommon.prototype.requestFineLocationPermission = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    MapboxCommon.prototype.hasFineLocationPermission = function () {
        return new Promise(function (resolve) {
            resolve(true);
        });
    };
    MapboxCommon.defaults = {
        style: MapStyle.STREETS.toString(),
        mapStyle: MapStyle.STREETS.toString(),
        margins: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        zoomLevel: 0,
        showUserLocation: false,
        hideLogo: false,
        hideAttribution: true,
        hideCompass: false,
        disableRotation: false,
        disableScroll: false,
        disableZoom: false,
        disableTilt: false,
        delay: 0
    };
    return MapboxCommon;
}());
exports.MapboxCommon = MapboxCommon;
var MapboxViewCommonBase = (function (_super) {
    __extends(MapboxViewCommonBase, _super);
    function MapboxViewCommonBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapboxViewCommonBase.prototype.addMarkers = function (markers) {
        return this.mapbox.addMarkers(markers, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.removeMarkers = function (options) {
        return this.mapbox.removeMarkers(options, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setOnMapClickListener = function (listener) {
        return this.mapbox.setOnMapClickListener(listener, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setOnMapLongClickListener = function (listener) {
        return this.mapbox.setOnMapLongClickListener(listener, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setOnScrollListener = function (listener, nativeMap) {
        return this.mapbox.setOnScrollListener(listener, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setOnFlingListener = function (listener, nativeMap) {
        return this.mapbox.setOnFlingListener(listener, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setOnCameraMoveListener = function (listener, nativeMap) {
        return this.mapbox.setOnCameraMoveListener(listener, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setOnCameraMoveCancelListener = function (listener, nativeMap) {
        return this.mapbox.setOnCameraMoveCancelListener(listener, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setOnCameraIdleListener = function (listener, nativeMap) {
        return this.mapbox.setOnCameraIdleListener(listener, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.getViewport = function () {
        return this.mapbox.getViewport(this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setViewport = function (options) {
        return this.mapbox.setViewport(options, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setMapStyle = function (style) {
        return this.mapbox.setMapStyle(style, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.getCenter = function () {
        return this.mapbox.getCenter(this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setCenter = function (options) {
        return this.mapbox.setCenter(options, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.getZoomLevel = function () {
        return this.mapbox.getZoomLevel(this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setZoomLevel = function (options) {
        return this.mapbox.setZoomLevel(options, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.getTilt = function () {
        return this.mapbox.getTilt(this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.setTilt = function (options) {
        return this.mapbox.setTilt(options, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.getUserLocation = function () {
        return this.mapbox.getUserLocation(this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.trackUser = function (options) {
        return this.mapbox.trackUser(options, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.addPolygon = function (options) {
        return this.mapbox.addPolygon(options, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.removePolygons = function (ids) {
        return this.mapbox.removePolygons(ids, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.addPolyline = function (options) {
        return this.mapbox.addPolyline(options, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.removePolylines = function (ids) {
        return this.mapbox.removePolylines(ids, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.animateCamera = function (options) {
        return this.mapbox.animateCamera(options, this.getNativeMapView());
    };
    MapboxViewCommonBase.prototype.destroy = function () {
        return this.mapbox.destroy(this.getNativeMapView());
    };
    return MapboxViewCommonBase;
}(content_view_1.ContentView));
exports.MapboxViewCommonBase = MapboxViewCommonBase;
exports.zoomLevelProperty = new view_1.Property({ name: "zoomLevel" });
exports.zoomLevelProperty.register(MapboxViewCommonBase);
exports.accessTokenProperty = new view_1.Property({ name: "accessToken" });
exports.accessTokenProperty.register(MapboxViewCommonBase);
exports.mapStyleProperty = new view_1.Property({ name: "mapStyle" });
exports.mapStyleProperty.register(MapboxViewCommonBase);
exports.latitudeProperty = new view_1.Property({ name: "latitude" });
exports.latitudeProperty.register(MapboxViewCommonBase);
exports.longitudeProperty = new view_1.Property({ name: "longitude" });
exports.longitudeProperty.register(MapboxViewCommonBase);
exports.showUserLocationProperty = new view_1.Property({
    name: "showUserLocation",
    defaultValue: MapboxCommon.defaults.showUserLocation,
    valueConverter: view_1.booleanConverter
});
exports.showUserLocationProperty.register(MapboxViewCommonBase);
exports.hideLogoProperty = new view_1.Property({
    name: "hideLogo",
    defaultValue: MapboxCommon.defaults.hideLogo,
    valueConverter: view_1.booleanConverter
});
exports.hideLogoProperty.register(MapboxViewCommonBase);
exports.hideAttributionProperty = new view_1.Property({
    name: "hideAttribution",
    defaultValue: MapboxCommon.defaults.hideAttribution,
    valueConverter: view_1.booleanConverter
});
exports.hideAttributionProperty.register(MapboxViewCommonBase);
exports.hideCompassProperty = new view_1.Property({
    name: "hideCompass",
    defaultValue: MapboxCommon.defaults.hideCompass,
    valueConverter: view_1.booleanConverter
});
exports.hideCompassProperty.register(MapboxViewCommonBase);
exports.disableZoomProperty = new view_1.Property({
    name: "disableZoom",
    defaultValue: MapboxCommon.defaults.disableZoom,
    valueConverter: view_1.booleanConverter
});
exports.disableZoomProperty.register(MapboxViewCommonBase);
exports.disableRotationProperty = new view_1.Property({
    name: "disableRotation",
    defaultValue: MapboxCommon.defaults.disableRotation,
    valueConverter: view_1.booleanConverter
});
exports.disableRotationProperty.register(MapboxViewCommonBase);
exports.disableScrollProperty = new view_1.Property({
    name: "disableScroll",
    defaultValue: MapboxCommon.defaults.disableScroll,
    valueConverter: view_1.booleanConverter
});
exports.disableScrollProperty.register(MapboxViewCommonBase);
exports.disableTiltProperty = new view_1.Property({
    name: "disableTilt",
    defaultValue: MapboxCommon.defaults.disableTilt,
    valueConverter: view_1.booleanConverter
});
exports.disableTiltProperty.register(MapboxViewCommonBase);
exports.delayProperty = new view_1.Property({ name: "delay" });
exports.delayProperty.register(MapboxViewCommonBase);
var MapboxViewBase = (function (_super) {
    __extends(MapboxViewBase, _super);
    function MapboxViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {};
        return _this;
    }
    MapboxViewBase.prototype[exports.zoomLevelProperty.setNative] = function (value) {
        this.config.zoomLevel = +value;
    };
    MapboxViewBase.prototype[exports.mapStyleProperty.setNative] = function (value) {
        this.config.style = value;
        this.config.mapStyle = value;
    };
    MapboxViewBase.prototype[exports.accessTokenProperty.setNative] = function (value) {
        this.config.accessToken = value;
    };
    MapboxViewBase.prototype[exports.delayProperty.setNative] = function (value) {
        this.config.delay = parseInt("" + value);
    };
    MapboxViewBase.prototype[exports.latitudeProperty.setNative] = function (value) {
        this.config.center = this.config.center || {};
        this.config.center.lat = +value;
    };
    MapboxViewBase.prototype[exports.longitudeProperty.setNative] = function (value) {
        this.config.center = this.config.center || {};
        this.config.center.lng = +value;
    };
    MapboxViewBase.prototype[exports.showUserLocationProperty.setNative] = function (value) {
        this.config.showUserLocation = value;
    };
    MapboxViewBase.prototype[exports.hideLogoProperty.setNative] = function (value) {
        this.config.hideLogo = value;
    };
    MapboxViewBase.prototype[exports.hideAttributionProperty.setNative] = function (value) {
        this.config.hideAttribution = value;
    };
    MapboxViewBase.prototype[exports.hideCompassProperty.setNative] = function (value) {
        this.config.hideCompass = value;
    };
    MapboxViewBase.prototype[exports.disableZoomProperty.setNative] = function (value) {
        this.config.disableZoom = value;
    };
    MapboxViewBase.prototype[exports.disableRotationProperty.setNative] = function (value) {
        this.config.disableRotation = value;
    };
    MapboxViewBase.prototype[exports.disableScrollProperty.setNative] = function (value) {
        this.config.disableScroll = value;
    };
    MapboxViewBase.prototype[exports.disableTiltProperty.setNative] = function (value) {
        this.config.disableTilt = value;
    };
    MapboxViewBase.mapReadyEvent = "mapReady";
    MapboxViewBase.locationPermissionGrantedEvent = "locationPermissionGranted";
    MapboxViewBase.locationPermissionDeniedEvent = "locationPermissionDenied";
    return MapboxViewBase;
}(MapboxViewCommonBase));
exports.MapboxViewBase = MapboxViewBase;
