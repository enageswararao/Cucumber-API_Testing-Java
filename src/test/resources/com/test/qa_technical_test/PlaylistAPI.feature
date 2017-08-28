Feature:   Playlist API

  Background: The API calls the song endpoint 'Playlist' due to the expectation to use music videos.

  @playlistAPI
  Scenario: Create a playlist in the Daily songs API
    Given Create a playlist API "BaseURL"and path as "postCreatePlaylist"
    When The user makes playlistAPI "Post" request with the header Parmaeter
    Then The user receives the status "httpcode201" for the response

  @playlistAPI
  Scenario: Get Returns a list of playlist in the Daily songs API
    Given Create a playlist API "BaseURL"and path as "getListOfplaylists"
    When The user makes playlistAPI "Get_ALL" request with the header Parmaeter
    Then The user receives the status "httpcode200" for the response

  @playlistAPI
  Scenario: Get Returns a list of playlist in the Daily songs API
    Given Create a playlist API "BaseURL"and path as "getListOfplaylists"
    When The user makes playlistAPI "Get_one" request with the header Parmaeter
    Then The user receives the status "httpcode200" for the response

  @playlistAPI
  Scenario: Update playlist in the Daily songs API
    Given Create a playlist API "BaseURL"and path as "postCreatePlaylist"
    When The user makes playlistAPI "Post" request with the header Parmaeter
    Then The user receives the status "httpcode201" for the response
    Given Create a playlist API "BaseURL"and path as "patchUpdateplaylist"
    When The user makes playlistAPI "Patch" request with the header Parmaeter
    Then The user receives the status "httpcode500" for the response

  @playlistAPI
  Scenario: Delete a playlist in the Daily songs API
    Given Create a playlist API "BaseURL"and path as "postCreatePlaylist"
    When The user makes playlistAPI "Post" request with the header Parmaeter
    Then The user receives the status "httpcode201" for the response
    Given Create a playlist API "BaseURL"and path as "deletePlaylist"
    When The user makes playlistAPI "Delete" request with the header Parmaeter
    Then The user receives the status "httpcode204" for the response

