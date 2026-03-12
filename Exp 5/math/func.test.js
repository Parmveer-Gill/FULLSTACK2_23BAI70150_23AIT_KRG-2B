import {ans , getUserName} from "./func.js"


test ("Sum of the values:",()=>{
    expect(ans(2,3)).toBe(5);
});

test("returns username", ()=>{
    expect(getUserName({name:"Umang"})).toBe("Umang");
    expect(getUserName(null)).toBe("Guest");
});

