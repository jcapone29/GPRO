﻿module Potato.Golf {

    export class UserInfo {
        Id: number;
        UserName: string;
        Password: string;
        Email: string;
        FirstName: string;
        LastName: string;
        Handicap: number;
        Bio: string;
        ProfilePicture: string;
        SessionInfo: ActiveSession;
    }


    export class ActiveSession {

        Token: string;
        ExerationDateTime: Date;
        cuurentlyActive: boolean;

    }
}