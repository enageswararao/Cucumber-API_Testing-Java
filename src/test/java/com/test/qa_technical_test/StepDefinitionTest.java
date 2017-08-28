package com.test.qa_technical_test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Properties;

import com.qa_technical_test.PlayListAPIs;
import com.qa_technical_test.SongAPIs;
import com.qa_technical_test.constants.Endpoints;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefinitionTest {
	SongAPIs songsAPI=new SongAPIs(); 
	PlayListAPIs playlistAPI=new PlayListAPIs(); 

	 Properties QACONFIG=null;
	 FileInputStream fs=null;
	 HashMap<String,String> result_response;
	public StepDefinitionTest(){
		
		QACONFIG=new Properties() ;
			try {
				fs=new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\qa_technical_test_config\\Environment.properties");
				QACONFIG.load(fs);
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	 
			  catch (IOException e) {
			  } 
	}
	@Given("^Create a Video API \"([a-zA-Z]{1,})\"and path as \"([a-zA-Z]{1,})\"$")
	public void create_a_VideoAPI(String baseURL,String path ) throws Throwable {
		
		if(path.equals("postCreateVideo"))
		songsAPI.requestURL(QACONFIG.getProperty(baseURL),Endpoints.postCreateVideo);
		
		else if(path.equals("getListOfVideos"))
			songsAPI.requestURL(QACONFIG.getProperty(baseURL),Endpoints.getListOfVideos);
	
		
		if(path.equals("patchUpdateVideo"))
		songsAPI.requestURL(QACONFIG.getProperty(baseURL),Endpoints.patchUpdateVideo+result_response.get("videoId"));
		
		else if(path.equals("deleteVideo"))
			songsAPI.requestURL(QACONFIG.getProperty(baseURL),Endpoints.deleteVideo+result_response.get("videoId"));
		
		else if(path.equals("getSingleVideos"))
			songsAPI.requestURL(QACONFIG.getProperty(baseURL),Endpoints.getSingleVideos+result_response.get("videoId"));
	
		
	}
	@Given("^Create a playlist API \"([a-zA-Z]{1,})\"and path as \"([a-zA-Z]{1,})\"$")
	public void create_a_PlaylistAPI(String baseURL,String path ) throws Throwable {
		
		if(path.equals("postCreatePlaylist"))
			playlistAPI.create_a_PlaylistAPI(QACONFIG.getProperty(baseURL),Endpoints.postCreatePlaylist);
		
		else if(path.equals("getListOfplaylists"))
			playlistAPI.create_a_PlaylistAPI(QACONFIG.getProperty(baseURL),Endpoints.getListOfplaylists);
	
		
		if(path.equals("patchUpdateplaylist"))
			playlistAPI.create_a_PlaylistAPI(QACONFIG.getProperty(baseURL),Endpoints.patchUpdateplaylist+result_response.get("PlaylistId"));
		
		else if(path.equals("deletePlaylist"))
			playlistAPI.create_a_PlaylistAPI(QACONFIG.getProperty(baseURL),Endpoints.deletePlaylist+result_response.get("PlaylistId"));
		
		else if(path.equals("getSinglePlaylist"))
			playlistAPI.create_a_PlaylistAPI(QACONFIG.getProperty(baseURL),Endpoints.getSinglePlaylist+result_response.get("PlaylistId"));
	
		
	}
	
	@Given("^Get List Video in the Daily Songs API \"([a-zA-Z]{1,})\"$")
	public void create_a_getVideoListsAPI(String baseURL ) throws Throwable {
		songsAPI.postCreateVideoAPI( );
		System.out.println("my current url is: " +baseURL );
	}

	
	@Given("^Get Single Video in the Daily Songs API \"([a-zA-Z]{1,})\" and \"([a-zA-Z]{1,})\"$")
	public void create_a_getsingleVideoAPI(String baseURL,String VideoId ) throws Throwable {
		songsAPI.postCreateVideoAPI( );
		System.out.println("my current url is: " +baseURL );
	}
	@When("^The user makes a \"(.*)\" request with the header Parmaeter$")
	public void user_make_a_postrequest(String methodType ) throws Throwable {
		
		System.out.println("&&&&&&&&&&&&&&&&&&&&&&&"+methodType);
		String splitarry[]=new String [2];
		System.out.println("---------------"+methodType.contains("_"));
 		if(methodType.contains("_")) {
			
 			splitarry=methodType.split("_");
		}
		if(methodType.equals("Post")){
			
			result_response=songsAPI.postCreateVideoAPI();
			System.out.println("Post Method is executing................");
		}
		else if(methodType.contains("Get")){
			System.out.println("---------@@@@@@@@@"+splitarry[1]);
			if(splitarry[1].equals("ALL")){
			result_response=songsAPI.getVideoInfoAPI();
			System.out.println("GET ALL Method is executing................");
			}else {
				result_response=songsAPI.getVideoAPI( );
			}
		}else if(methodType.equals("Patch")){
			System.out.println("&&&&&&&&&&&&&&&&&&&&&&&"+methodType);

			result_response=songsAPI.patchUpdatedVideoAPI( );
			System.out.println("GET Method is executing................");

		}else if(methodType.equals("Delete")){
			result_response=songsAPI.deleteVideoAPI();
			System.out.println("GET Method is executing................");

			
		}	
	}
		//playlist logic
		@When("^The user makes playlistAPI \"(.*)\" request with the header Parmaeter$")
		public void user_make_playlistAPI_postrequest(String methodType ) throws Throwable {
			
			System.out.println("&&&&&&&&&&&&&&&&&&&&&&&"+methodType);
			String splitarry[]=new String [2];
			System.out.println("---------------"+methodType.contains("_"));
	 		if(methodType.contains("_")) {
				
	 			splitarry=methodType.split("_");
			}
			if(methodType.equals("Post")){
				
				result_response=playlistAPI.postCreatePlaylistAPI();
				System.out.println("Post Method is executing................");
			}
			else if(methodType.contains("Get")){
				System.out.println("---------@@@@@@@@@"+splitarry[1]);
				if(splitarry[1].equals("ALL")){
				result_response=playlistAPI.getPlayListInfoAPI();
				System.out.println("GET ALL Method is executing................");
				}else {
					result_response=playlistAPI.getPlayListAPI( ); 
				}
			}else if(methodType.equals("Patch")){
				System.out.println("&&&&&&&&&&&&&&&&&&&&&&&"+methodType);

				result_response=playlistAPI.patchUpdatedPlaylistAPI( );
				System.out.println("GET Method is executing................");

			}else if(methodType.equals("Delete")){
				result_response=playlistAPI.deletePlayListAPI();
				System.out.println("GET Method is executing................");

				
			}	

	}
	
 
	
	@Then("^The user receives the status \"(.*)\" for the response$")
	public void user_validate_status_code(String  responseCode){
 System.out.println("API actual Response......."+result_response.get("HTTPCODE"));
 System.out.println("API exp Response ............"+QACONFIG.get(responseCode).toString());
		 
		songsAPI.verifyHttpCode(result_response.get("HTTPCODE"),QACONFIG.get(responseCode).toString());
 
	}
	
	
	
}
 
