export const goToLogin = (nagivate)=> { 
    nagivate("/");
}
export const goToSignin = (nagivate)=> { 
    nagivate("/signin");
}
export const goToFeed = (nagivate)=> { 
    nagivate("/feed");
}
export const goToPost = (nagivate)=> { 
    nagivate(`/post/:${id}`);
}