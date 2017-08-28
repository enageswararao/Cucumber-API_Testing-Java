Feature: Daily Song API

  Background: The API calls the song endpoint 'videos' due to the expectation to use music videos.


    
  @songAPI
  Scenario: Create a video in the Daily songs API
   Given Create a Video API "BaseURL"and path as "postCreateVideo"
       When The user makes a "Post" request with the header Parmaeter
    Then The user receives the status "httpcode200" for the response

  @songAPI
  Scenario: Get Returns a list of videos in the Daily songs API
    Given Create a Video API "BaseURL"and path as "postCreateVideo"
    When The user makes a "Get_ALL" request with the header Parmaeter
    Then The user receives the status "httpcode200" for the response

  @songAPI
  Scenario: Get Single a list of videos in the Daily songs API
    Given Create a Video API "BaseURL"and path as "postCreateVideo"
    When The user makes a "Get_one" request with the header Parmaeter
    Then The user receives the status "httpcode200" for the response

  @songAPI
  Scenario: Update video in the Daily songs API
    Given Create a Video API "BaseURL"and path as "postCreateVideo"
    When The user makes a "Post" request with the header Parmaeter
    Then The user receives the status "httpcode200" for the response
    Given Create a Video API "BaseURL"and path as "patchUpdateVideo"
    When The user makes a "Patch" request with the header Parmaeter
    Then The user receives the status "httpcode501" for the response
  
    
  @songAPI
  Scenario: Delete a video in the Daily songs API
    Given Create a Video API "BaseURL"and path as "postCreateVideo"
    When The user makes a "Post" request with the header Parmaeter
    Then The user receives the status "httpcode200" for the response
    Given Create a Video API "BaseURL"and path as "deleteVideo"
    When The user makes a "Delete" request with the header Parmaeter    
    Then The user receives the status "httpcode204" for the response
  