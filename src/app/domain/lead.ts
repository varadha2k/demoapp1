
export interface ILead {

    id?: string;
    leadId?: number;
    leadName?: string;
    leadFName?: string;    
    leadLName?: string;    
    email?: string;
    phone?: string;
    location?: string;
    leadStatus?: string;
    leadOwner?: string;
    leadSource?: string;
    createdBy?: string;
    createdTime?: string;
    updatedTime?: string;
    followupDate?: string;
    message?: string;

    dobMonth?: string;
    dobDay?: string;
    dobYear?: string;
    gender?: string;
    address?: string;
    zip?: string;
    city?: string;
    state?: string;

    child1FName?: string;
    child1LName?: string;
    child1DobMonth?: string;
    child1DobDay?: string;
    child1DobYear?: string;

    child2FName?: string;
    child2LName?: string;
    child2DobMonth?: string;
    child2DobDay?: string;
    child2DobYear?: string;

    child3FName?: string;
    child3LName?: string;
    child3DobMonth?: string;
    child3DobDay?: string;
    child3DobYear?: string;


    /*
    
    All the drop downs values


        Lead Status
        ---
        New Lead
        Scheduled
        No Show
        New Client
        Consultation - No Sale
        Contact in Future
        Junk Lead
        Not Interested

        Lead Source
        ---

        Phone - Adworks
        Phone - Website
        Phone - Bing
        Phone - Facebook
        Phone - Military Recruit
        Phone - Referral
        Phone
        Walkin
        Website
        Adworks
        Referral
        Groupan
        Atomic
        Gold's Gym
        Bing
        Facebook
        Yelp


    */
}