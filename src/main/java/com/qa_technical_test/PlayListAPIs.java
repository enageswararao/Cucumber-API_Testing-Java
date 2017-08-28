package com.qa_technical_test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Properties;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.fluent.Request;

import com.jayway.jsonpath.JsonPath;
import com.qa_technical_test.constants.Endpoints;
import com.qa_technical_test.constants.TestData;

public class PlayListAPIs {

	public static String APIURL=null;
	 Properties QACONFIG=null;
	 FileInputStream fs=null;
		HashMap<String,String> result_palylist;

	    public static final Charset UTF_8 = Charset.forName("UTF-8");
	public PlayListAPIs(){
		
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

	public void create_a_PlaylistAPI(String baseURL,String path){
	
		APIURL= baseURL+path;
		System.out.println("BaseURL--->"+APIURL);
	} 

//POST /api/playlist
 //Create a playlist
public HashMap<String,String>  postCreatePlaylistAPI( ) throws ClientProtocolException, IOException{
	 result_palylist=new HashMap<String,String>();

	HttpResponse response=Request.Post(APIURL)
              .addHeader("Content-Type", "application/json")
              .bodyString(TestData.createPlaylistJSON, null)           
              .execute().returnResponse();
	 HttpEntity entity=response.getEntity();
     System.out.println("String reponse --->"+ response.getStatusLine().getStatusCode()  );

     String theString = IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8); 
     System.out.println("String reponse --->"+ theString);

     result_palylist.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()));
     result_palylist.put("HTTPResponse",IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8));
     result_palylist.put("PlaylistId",JsonPath.parse(theString).read("$._id").toString());

	return result_palylist;

	}
	//GET /api/playlist/(id)
    //Return a single playlist.
	public HashMap<String,String> getPlayListInfoAPI( )  {
		HashMap<String,String> result=new HashMap<String,String>();
		try {
				 
			HttpResponse response=Request.Get(APIURL)
			.execute().returnResponse();
			
		  HttpEntity entity=response.getEntity();
	     System.out.println("String reponse --->"+ response.getStatusLine().getStatusCode()  );
 
	     String theString = IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8); 
	     System.out.println("String reponse --->"+ theString);

	     result.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()));
	     result.put("HTTPResponse",IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8));

		} catch (Exception e) {
			System.out.println("Exception e");

		}
		return result;
	}
	
	//GET /api/playlist/(id)
    //Return a single playlist.
	public HashMap<String,String> getPlayListAPI( )  {
		HashMap<String,String> result=new HashMap<String,String>();
		try {
				 
			HttpResponse response=Request.Get(APIURL)
			.execute().returnResponse();
			
		  HttpEntity entity=response.getEntity();
	     System.out.println("String reponse --->"+ response.getStatusLine().getStatusCode()  );
 
	     String theString = IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8); 
	     System.out.println("String reponse --->"+ theString);

	     result.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()));
	     result.put("HTTPResponse",IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8));

		} catch (Exception e) {
			System.out.println("Exception e");

		}
		return result;
	}
	//PATCH /api/playlist/(id)
	//Add and remove song from the playlist.

	public HashMap<String,String> patchUpdatedPlaylistAPI( ){
		
		HashMap<String,String> result=new HashMap<String,String>();

		try {
				 
			HttpResponse response=Request.Patch(APIURL)// ] }"
		              .bodyString("{ \"videos\": [ {\"'"+ result_palylist.get("PlaylistId")+"'\": \"remove\"}", null)
					.execute().returnResponse();
			 HttpEntity entity=response.getEntity();
		     System.out.println("String reponse --->"+ response.getStatusLine().getStatusCode()  );
	 
		    /* String theString = IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8); 
		     System.out.println("String reponse --->"+ theString);
*/
		     result.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()));
		 /*    result.put("HTTPResponse",IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8));
	*/
	 
		} catch (Exception e) {
			System.out.println("Exception e");

		}
		return result;
	}
	//DELETE /api/playlist/(id)
	//Delete a playlist

public HashMap<String,String> deletePlayListAPI(){
		
		HashMap<String,String> result=new HashMap<String,String>();

		try {
				 
			HttpResponse response=Request.Delete(APIURL)
			.execute().returnResponse();
			 HttpEntity entity=response.getEntity();
		     System.out.println("String reponse --->"+ response.getStatusLine().getStatusCode()  );
 
		     result.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()));
		  
	 
		} catch (Exception e) {
			System.out.println("Exception e");

		}
		return result;
	}
	public static void main(String[] args) {
	 

	}

}
