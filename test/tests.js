QUnit.config.requireExpects = true;

var lifecycle = {
	setup: function () {
	},
	teardown: function () {
//		$.contextmenu.defaults = {};
//		delete $.contextmenu.raw;
	}
};


module("prototype", lifecycle);

test("globals", function(){
	expect(1);
	ok( !!$.moogle.contextmenu, "exists in ui namnespace");
});
