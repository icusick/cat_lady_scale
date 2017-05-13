console.log('linked');

$(document).ready(function(){
   


    function Behavior (description, pointValue) {
        this.description = description;
        this.pointValue = pointValue;
    }
    Behavior.prototype = {
        getListItem: function () {
            return '<div class="behavior-item">' +
                '<div class="description">' + this.description + '</div>' +
                '<div class="points">' + this.pointValue + '</div>' +
                '</div>';
        },
    }

    function Status (title, image) {
        this.title = title;
        this.image = image;
    }
    Status.prototype = {
        imagePath: function (){
            return 'images/' + this.image;
        }
    }



 var catLadyBehaviors = [
        new Behavior("agrees that there's a cat gif for everything", 3),
        new Behavior("own one dog", -2),
        new Behavior("own one cat", 2),
        new Behavior("own more than one cat", 5),
        new Behavior("own more than one dog", -5),
        new Behavior("takes selfies with cats", 4),
        new Behavior("is mad at cats for destroying the songbird population of england", -10),
        new Behavior("hates cat hair on clothes", -4), 
        new Behavior("thinks tigers are cool, but housecats are pretty fucking lame", 1),
        new Behavior("considers 'accidentally' leaving the window open so man-man will escape and stop marching around and mewling his insuffereable yowl", -6)
        ];
  var CAT_LADY_SCALE = {
        10: new Status("Cat-sylum", 'cat_lady.jpg' ),
        9: new Status("ALL OF THE CATS", 'all_kittens.jpg' ),
        8: new Status("Takin Selfies With Cats", 'cat_selfie.jpg' ),
        7: new Status("A One-Cat Kind of Human", 'one_cat.jpg' ),
        6: new Status("Cat Gifs Are...Alright", 'grumpy.jpg' ),
        5: new Status("Indifferent", 'cat_dog_friends.jpg' ),
        4: new Status("Ehh, Dogs Greater...", 'cat_backseat.jpg' ),
        3: new Status("Dogs are where it's at", 'dogs.jpg' ),
        2: new Status("I wish I were allergic", 'allergic.jpg' ),
        1: new Status("Cats...like, the musical?", 'cats.jpg' ),
        0: new Status("What's a cat? Never heard of 'em", 'dog_heaven.jpg' ),
        };

// Cat Lady Object
var catLady = {
        behaviors: [],
        addBehavior : function (newBehavior) {
                    this.behaviors.push(newBehavior);
                    this.updateStatus();
          
        },
        status: CAT_LADY_SCALE[5], // just the inital status... INDIFFERENT
        updateStatus: function () {
      
           var sum = 5
            for (var i = 0; i < this.behaviors.length; i++ ) {
                 sum += this.behaviors[i].pointValue
            }
            console.log(sum)
            if (sum <= 10) {
                this.status = CAT_LADY_SCALE[sum]
            } else if (sum > 10) {
                this.status = CAT_LADY_SCALE[10]
                alert("you like cats too much. find a hobby. your hobby cannot be knitting. if you're this into cats, you probably already knit. get out there, make some friends. or stay in and watch avatar or buffy. i don't know. and i don't care.");
            } else {
                this.status = CAT_LADY_SCALE[0]
                alert("you really hate cats. well done. now you can leave this site and find one about how awesome dogs are. or buffy. whatever you're into."); 
                    return
            };
            
        },
    };

var fillBehaviorList = function(){
        for (var i = 0; i < catLadyBehaviors.length; i++) {
                var description = catLadyBehaviors[i].description;
                var points = catLadyBehaviors[i].pointValue;
                var behaviorList2 = '<label><input type="checkbox" />' + description +' </label>';
                $('.behavior-form').append(behaviorList2)
        }
}

// '<label><input type="checkbox" />' + description +' </label>'

// '<input type="checkbox" id="catLady"/> <label for="catLady">' + description

fillBehaviorList();

});

 // var option = '<option value="' + i +'">' + description + '</option>';
 //            $('#new-behavior-form .behaviors').append(option);








