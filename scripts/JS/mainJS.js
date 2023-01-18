var slides = [
    {
        title: 'Trapsoul',
        artist: 'Bryson Tiller',
        desc:
            'Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, ' +
            'Kentucky, he started his career in 2011, releasing the debut mixtape titled ' +
            'Killer Instinct Vol.1.'
    }, {
        title: 'Trapsoul',
        artist: 'Drake',
        desc:
            'Drake is dope!'
    }, {
        title: 'Trapsoul',
        artist: 'Young Ford',
        desc:
            'Crazy stuff is happening!'
    }
];

var oneNum = 0;
var twoNum = 1;
var threeNum = 2;

var oneTitle = document.getElementById("slide_1_title");
var oneArtist = document.getElementById('slide_1_artist');
var oneDesc = document.getElementById('slide_1_desc');

var twoTitle = document.getElementById('slide_2_title');
var twoArtist = document.getElementById('slide_2_artist');
var twoDesc = document.getElementById('slide_2_desc');

var threeTitle = document.getElementById('slide_3_title');
var threeArtist = document.getElementById('slide_3_artist');
var threeDesc = document.getElementById('slide_3_desc');

function initMap() {
    var myLatLng = {lat: 38.97123, lng: -94.6921224};

    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#73c751"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#001d5d"
                    }
                ]
            }
        ]
    );

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Lifted Logic',
        icon: 'images/icons/Location_pin.png'
    });
}

function GetCheckedState () {
    var input = document.getElementById ("toggle");
    var navBarList = document.getElementById("navBarList");

    if(input.checked == true){
        navBarList.style.display = "block";
    } else {
        navBarList.style.display = "none";
    }
}

function nextSlide(){

    oneNum += 1;
    twoNum += 1;
    threeNum += 1;

    if(oneNum > slides.length-1){
        oneNum = 0;
    }

    if(twoNum > slides.length-1){
        twoNum = 0;
    }

    if(threeNum > slides.length-1){
        threeNum = 0;
    }

    oneTitle.innerHTML = slides[oneNum].title;
    oneArtist.innerHTML = slides[oneNum].artist;
    oneDesc.innerHTML = slides[oneNum].desc;

    twoTitle.innerHTML = slides[twoNum].title;
    twoArtist.innerHTML = slides[twoNum].artist;
    twoDesc.innerHTML = slides[twoNum].desc;

    threeTitle.innerHTML = slides[threeNum].title;
    threeArtist.innerHTML = slides[threeNum].artist;
    threeDesc.innerHTML = slides[threeNum].desc;

}

function prevSlide(){

    oneNum -= 1;
    twoNum -= 1;
    threeNum -= 1;

    if(oneNum < 0){
        oneNum = slides.length-1;
    }

    if(twoNum < 0){
        twoNum = slides.length-1;
    }

    if(threeNum < 0){
        threeNum = slides.length-1;
    }

    oneTitle.innerHTML = slides[oneNum].title;
    oneArtist.innerHTML = slides[oneNum].artist;
    oneDesc.innerHTML = slides[oneNum].desc;

    twoTitle.innerHTML = slides[twoNum].title ;
    twoArtist.innerHTML = slides[twoNum].artist ;
    twoDesc.innerHTML = slides[twoNum].desc ;

    threeTitle.innerHTML = slides[threeNum].title;
    threeArtist.innerHTML = slides[threeNum].artist;
    threeDesc.innerHTML = slides[threeNum].desc;

}

oneTitle.innerHTML = slides[oneNum].title;
oneArtist.innerHTML = slides[oneNum].artist;
oneDesc.innerHTML = slides[oneNum].desc;

twoTitle.innerHTML = slides[twoNum].title ;
twoArtist.innerHTML = slides[twoNum].artist ;
twoDesc.innerHTML = slides[twoNum].desc ;

threeTitle.innerHTML = slides[threeNum].title;
threeArtist.innerHTML = slides[threeNum].artist;
threeDesc.innerHTML = slides[threeNum].desc;