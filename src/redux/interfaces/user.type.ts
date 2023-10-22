export interface User {
   _id: string;
   email: string;
   allowRoles: string[];
   profile: Profile;
}

export interface Profile {
   name: string;
   lastname: string;
   username: string;
   gender: string;
}
