$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/test/qa_technical_test/DialySongAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Daily Song API",
  "description": "",
  "id": "daily-song-api",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027videos\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Create a video in the Daily songs API",
  "description": "",
  "id": "daily-song-api;create-a-video-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@songAPI"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Create a Video API \"BaseURL\"and path as \"postCreateVideo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "The user makes a \"Post\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user receives the status \"httpcode200\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 20
    },
    {
      "val": "postCreateVideo",
      "offset": 41
    }
  ],
  "location": "StepDefinitionTest.create_a_VideoAPI(String,String)"
});
formatter.result({
  "duration": 152064849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Post",
      "offset": 18
    }
  ],
  "location": "StepDefinitionTest.user_make_a_postrequest(String)"
});
formatter.result({
  "duration": 1678805342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode200",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 1568971,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027videos\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "Get Returns a list of videos in the Daily songs API",
  "description": "",
  "id": "daily-song-api;get-returns-a-list-of-videos-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@songAPI"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Create a Video API \"BaseURL\"and path as \"postCreateVideo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "The user makes a \"Get_ALL\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The user receives the status \"httpcode200\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 20
    },
    {
      "val": "postCreateVideo",
      "offset": 41
    }
  ],
  "location": "StepDefinitionTest.create_a_VideoAPI(String,String)"
});
formatter.result({
  "duration": 518714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get_ALL",
      "offset": 18
    }
  ],
  "location": "StepDefinitionTest.user_make_a_postrequest(String)"
});
formatter.result({
  "duration": 254394315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode200",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 608088,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027videos\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "Get Single a list of videos in the Daily songs API",
  "description": "",
  "id": "daily-song-api;get-single-a-list-of-videos-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@songAPI"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Create a Video API \"BaseURL\"and path as \"postCreateVideo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "The user makes a \"Get_one\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The user receives the status \"httpcode200\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 20
    },
    {
      "val": "postCreateVideo",
      "offset": 41
    }
  ],
  "location": "StepDefinitionTest.create_a_VideoAPI(String,String)"
});
formatter.result({
  "duration": 1213183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get_one",
      "offset": 18
    }
  ],
  "location": "StepDefinitionTest.user_make_a_postrequest(String)"
});
formatter.result({
  "duration": 196698191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode200",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 297202,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027videos\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 26,
  "name": "Update video in the Daily songs API",
  "description": "",
  "id": "daily-song-api;update-video-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@songAPI"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Create a Video API \"BaseURL\"and path as \"postCreateVideo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "The user makes a \"Post\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The user receives the status \"httpcode200\" for the response",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Create a Video API \"BaseURL\"and path as \"patchUpdateVideo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The user makes a \"Patch\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The user receives the status \"httpcode501\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 20
    },
    {
      "val": "postCreateVideo",
      "offset": 41
    }
  ],
  "location": "StepDefinitionTest.create_a_VideoAPI(String,String)"
});
formatter.result({
  "duration": 947626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Post",
      "offset": 18
    }
  ],
  "location": "StepDefinitionTest.user_make_a_postrequest(String)"
});
formatter.result({
  "duration": 176975945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode200",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 405392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 20
    },
    {
      "val": "patchUpdateVideo",
      "offset": 41
    }
  ],
  "location": "StepDefinitionTest.create_a_VideoAPI(String,String)"
});
formatter.result({
  "duration": 342531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patch",
      "offset": 18
    }
  ],
  "location": "StepDefinitionTest.user_make_a_postrequest(String)"
});
formatter.result({
  "duration": 178932347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode501",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 752626,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027videos\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 36,
  "name": "Delete a video in the Daily songs API",
  "description": "",
  "id": "daily-song-api;delete-a-video-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@songAPI"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Create a Video API \"BaseURL\"and path as \"postCreateVideo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "The user makes a \"Post\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "The user receives the status \"httpcode200\" for the response",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Create a Video API \"BaseURL\"and path as \"deleteVideo\"",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "The user makes a \"Delete\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The user receives the status \"httpcode204\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 20
    },
    {
      "val": "postCreateVideo",
      "offset": 41
    }
  ],
  "location": "StepDefinitionTest.create_a_VideoAPI(String,String)"
});
formatter.result({
  "duration": 1323939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Post",
      "offset": 18
    }
  ],
  "location": "StepDefinitionTest.user_make_a_postrequest(String)"
});
formatter.result({
  "duration": 171394532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode200",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 385293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 20
    },
    {
      "val": "deleteVideo",
      "offset": 41
    }
  ],
  "location": "StepDefinitionTest.create_a_VideoAPI(String,String)"
});
formatter.result({
  "duration": 279241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete",
      "offset": 18
    }
  ],
  "location": "StepDefinitionTest.user_make_a_postrequest(String)"
});
formatter.result({
  "duration": 178766855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode204",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 388287,
  "status": "passed"
});
formatter.uri("com/test/qa_technical_test/PlaylistAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Playlist API",
  "description": "",
  "id": "playlist-api",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027Playlist\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Create a playlist in the Daily songs API",
  "description": "",
  "id": "playlist-api;create-a-playlist-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@playlistAPI"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Create a playlist API \"BaseURL\"and path as \"postCreatePlaylist\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "The user makes playlistAPI \"Post\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user receives the status \"httpcode201\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 23
    },
    {
      "val": "postCreatePlaylist",
      "offset": 44
    }
  ],
  "location": "StepDefinitionTest.create_a_PlaylistAPI(String,String)"
});
formatter.result({
  "duration": 1117822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Post",
      "offset": 28
    }
  ],
  "location": "StepDefinitionTest.user_make_playlistAPI_postrequest(String)"
});
formatter.result({
  "duration": 191096252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode201",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 321577,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027Playlist\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Get Returns a list of playlist in the Daily songs API",
  "description": "",
  "id": "playlist-api;get-returns-a-list-of-playlist-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@playlistAPI"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Create a playlist API \"BaseURL\"and path as \"getListOfplaylists\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "The user makes playlistAPI \"Get_ALL\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The user receives the status \"httpcode200\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 23
    },
    {
      "val": "getListOfplaylists",
      "offset": 44
    }
  ],
  "location": "StepDefinitionTest.create_a_PlaylistAPI(String,String)"
});
formatter.result({
  "duration": 1069500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get_ALL",
      "offset": 28
    }
  ],
  "location": "StepDefinitionTest.user_make_playlistAPI_postrequest(String)"
});
formatter.result({
  "duration": 205425242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode200",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 187729,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027Playlist\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Get Returns a list of playlist in the Daily songs API",
  "description": "",
  "id": "playlist-api;get-returns-a-list-of-playlist-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@playlistAPI"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Create a playlist API \"BaseURL\"and path as \"getListOfplaylists\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The user makes playlistAPI \"Get_one\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "The user receives the status \"httpcode200\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 23
    },
    {
      "val": "getListOfplaylists",
      "offset": 44
    }
  ],
  "location": "StepDefinitionTest.create_a_PlaylistAPI(String,String)"
});
formatter.result({
  "duration": 511016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get_one",
      "offset": 28
    }
  ],
  "location": "StepDefinitionTest.user_make_playlistAPI_postrequest(String)"
});
formatter.result({
  "duration": 197188254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode200",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 416511,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027Playlist\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 24,
  "name": "Update playlist in the Daily songs API",
  "description": "",
  "id": "playlist-api;update-playlist-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@playlistAPI"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Create a playlist API \"BaseURL\"and path as \"postCreatePlaylist\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The user makes playlistAPI \"Post\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The user receives the status \"httpcode201\" for the response",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Create a playlist API \"BaseURL\"and path as \"patchUpdateplaylist\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "The user makes playlistAPI \"Patch\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The user receives the status \"httpcode500\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 23
    },
    {
      "val": "postCreatePlaylist",
      "offset": 44
    }
  ],
  "location": "StepDefinitionTest.create_a_PlaylistAPI(String,String)"
});
formatter.result({
  "duration": 1385518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Post",
      "offset": 28
    }
  ],
  "location": "StepDefinitionTest.user_make_playlistAPI_postrequest(String)"
});
formatter.result({
  "duration": 180160070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode201",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 150953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 23
    },
    {
      "val": "patchUpdateplaylist",
      "offset": 44
    }
  ],
  "location": "StepDefinitionTest.create_a_PlaylistAPI(String,String)"
});
formatter.result({
  "duration": 169341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patch",
      "offset": 28
    }
  ],
  "location": "StepDefinitionTest.user_make_playlistAPI_postrequest(String)"
});
formatter.result({
  "duration": 170631642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode500",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 248880,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "The API calls the song endpoint \u0027Playlist\u0027 due to the expectation to use music videos.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 33,
  "name": "Delete a playlist in the Daily songs API",
  "description": "",
  "id": "playlist-api;delete-a-playlist-in-the-daily-songs-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@playlistAPI"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Create a playlist API \"BaseURL\"and path as \"postCreatePlaylist\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "The user makes playlistAPI \"Post\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "The user receives the status \"httpcode201\" for the response",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Create a playlist API \"BaseURL\"and path as \"deletePlaylist\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "The user makes playlistAPI \"Delete\" request with the header Parmaeter",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "The user receives the status \"httpcode204\" for the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 23
    },
    {
      "val": "postCreatePlaylist",
      "offset": 44
    }
  ],
  "location": "StepDefinitionTest.create_a_PlaylistAPI(String,String)"
});
formatter.result({
  "duration": 733383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Post",
      "offset": 28
    }
  ],
  "location": "StepDefinitionTest.user_make_playlistAPI_postrequest(String)"
});
formatter.result({
  "duration": 174613723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode201",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 1995316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BaseURL",
      "offset": 23
    },
    {
      "val": "deletePlaylist",
      "offset": 44
    }
  ],
  "location": "StepDefinitionTest.create_a_PlaylistAPI(String,String)"
});
formatter.result({
  "duration": 515721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete",
      "offset": 28
    }
  ],
  "location": "StepDefinitionTest.user_make_playlistAPI_postrequest(String)"
});
formatter.result({
  "duration": 181236412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "httpcode204",
      "offset": 30
    }
  ],
  "location": "StepDefinitionTest.user_validate_status_code(String)"
});
formatter.result({
  "duration": 349801,
  "status": "passed"
});
});