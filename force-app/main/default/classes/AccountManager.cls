public with sharing class AccountManager {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Id, Name, Phone, Website FROM Account LIMIT 10];
    }
}
