({
	packItem  : function(component, event, helper) {
		component.get("v.item.Packed__c", true);
        event.getSource().set("v.disabled",true);
	}
})