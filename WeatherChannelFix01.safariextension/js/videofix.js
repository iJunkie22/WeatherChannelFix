// Test
var main_vid_div, vid_el, play_pause_btn_div;
var fix_timout;


function videofix_init(){
    console.log('hi');
    main_vid_div = window.document.getElementById('articlepage-videoplayer');
    if (main_vid_div === null) {
        main_vid_div = window.document.getElementById('videopage-videoplayer');
    }
    vid_el = main_vid_div.getElementsByTagName('video')[0];
    play_pause_btn_div = main_vid_div.getElementsByClassName('akamai-play-pause akamai-button')[0];
    var new_btn = document.createElement('button');
    new_btn.className = 'akamai-icon';
    new_btn.setAttribute('onclick', 'tog_play_pause();');
    cur_child = play_pause_btn_div.firstChild;
    play_pause_btn_div.replaceChild(new_btn, cur_child);
    // play_pause_btn_div.insertBefore(new_btn, null);
    // play_pause_btn_div.addEventListener('click', tog_play_pause);
    }

function tog_play_pause() {
    var vid_el = document.getElementsByTagName('video')[0];
    if (vid_el.paused === true) {
        vid_el.play();
    }
    else {
        vid_el.pause();
    }
}
function runner(theMessageEvent) {
    if (theMessageEvent.name === "fixme") {
        console.log("received message")
        videofix_init()
    }
}

// safari.self.addEventListener("message", runner, false);

// var new_script1 = document.createElement('script');
var script_array = ['var main_vid_div, vid_el, play_pause_btn_div;'];
script_array.push([videofix_init.toString()]);
script_array.push([tog_play_pause.toString()]);
script_array.push(['window.setTimeout(videofix_init, 5000);']);
script_array.push(['videofix_init();']);
var script_str = script_array.join('\n');

// var temp_doc = document.createDocumentFragment();
var script_el = document.createElement('script');
script_el.type = 'text/javascript';
script_el.text = script_str;
document.body.appendChild(script_el);

