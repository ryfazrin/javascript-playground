var rssReader = {
    containers : null,

    // initialization function
    init : function(selector,googUrl) {

            // creating temp scripts which will help us to transform XML (RSS) to JSON
            
            var script = document.createElement('script');
            script.setAttribute('type','text/javascript');
            script.setAttribute('charset','utf-8');
            script.setAttribute('src',googUrl);
            document.getElementById("footer").appendChild(script);
        
    },

    // parsing of results by google
    parse : function(context, data) {
        var container = document.getElementById(context);
        container.innerHTML = '';

        // creating list of elements
        var mainList = document.createElement('ul');

        // also creating its childs (subitems)
        var entries = data.feed.entries;
        

        for (var i=0; i<entries.length; i++) {
            
            var listItem = document.createElement('li');
            var title = (i+1)+" . "+entries[i].title;
            var contentSnippet = entries[i].contentSnippet;
            var contentSnippetText = document.createTextNode(contentSnippet);

            var link = document.createElement('a');
            link.setAttribute('href', entries[i].link);
            link.setAttribute('target','_blank');
            var text = document.createTextNode(title);
            link.appendChild(text);

            // add link to list item
            listItem.appendChild(link);

            var desc = document.createElement('p');
            desc.appendChild(contentSnippetText);

            // add description to list item
            listItem.appendChild(desc);

            // adding list item to main list
            mainList.appendChild(listItem);
        }
        container.appendChild(mainList);
        document.getElementById("loading_feed").style.display = "none";
    }
};


//getFeed method called when getFeed button is clicked
function getFeed(){
    var feedURL = document.getElementById("feedURL").value;
    var fetchFeed = document.getElementById("fetchFeed").value;
    if(feedURL == ""){
        alert("Please Enter Feed URL");
    }else if(fetchFeed == ""){
        alert("Please Enter Number of Feed to Fetch");
    }else{
            document.getElementById("loading_feed").style.display = "block";
            var url = encodeURIComponent(feedURL);
            var googUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+fetchFeed+'&q='+url+'&callback=rssReader.parse&context=post_results1';
            console.log(googUrl);
            rssReader.init('post_results1',googUrl);
    }
    
}

