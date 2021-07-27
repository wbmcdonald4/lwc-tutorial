public with sharing class PulseManager {
    @AuraEnabled(cacheable=true)
    public static List<Pulse__c> getPulse(String accId){
        return [
            SELECT Id, Name, Pulse_Rating__c, Date_Set__c, Notes__c, Account__r.Name FROM Pulse__c 
            WHERE Account__c = :accId
            ORDER BY Date_Set__c DESC];
    }
}