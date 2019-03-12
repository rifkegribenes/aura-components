({
    clickCreateItem: function(component, event, helper) {
        var validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new item
            var newItem = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItem));
            createItem(component, newItem);
        }
    },
    createItem: function(component, item) {
        var theItems = component.get("v.items");
 
        // Copy the item to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newItem = JSON.parse(JSON.stringify(item));
 	    var defaultItem = { 'sobjectType': 'Camping_Item__c',
                        'Quantity__c': 0,
                        'Price__c': 0 };
        theItems.push(newItem);
        component.set("v.items", theItems);
        component.set("v.newItem", defaultItem);
    }

})
