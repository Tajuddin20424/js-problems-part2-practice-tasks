// ### Task -2: 
// Find the friend with the smallest name.
// <br>
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function toxiFriend(friends){
    let toxiFriend = friends[0];
    for (let i = 0; i < friends.length; i++){
        let element = friends[i];
        if (toxiFriend.length > element.length){
            toxiFriend = element;
        }
    } 
    console.log('The smallest name is:', toxiFriend);

}

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
toxiFriend(friends);