package com.qa_technical_test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Properties;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.commons.io.IOUtils;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.fluent.Form;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.fluent.Response;
import org.apache.http.entity.ContentType;
import org.apache.http.protocol.HTTP;
import org.apache.http.protocol.ResponseContent;

import com.jayway.jsonpath.JsonPath;
import com.qa_technical_test.constants.Endpoints;
import com.qa_technical_test.constants.TestData;

import junit.framework.Assert;

public class SongAPIs {

	public static String APIURL=null;
	public static HashMap<String,String> result=null;
    public static final Charset UTF_8 = Charset.forName("UTF-8");

	public void requestURL(String baseURL,String path){
	
		APIURL= baseURL+path;
		System.out.println("BaseURL--->"+APIURL);
	} 
/**
 * @Method Name postCreateVideoAPI
 * @Description : Create video API 
 * @return HashMap  holding HttpCode and ResponseContent as String formats
 * @throws ClientProtocolException
 * @throws IOException
 */
public HashMap<String,String>  postCreateVideoAPI( ) throws ClientProtocolException, IOException{
          result=new HashMap<String,String>();

	HttpResponse response=Request.Post(APIURL)
                .addHeader("Content-Type", "application/json")
                .bodyString(TestData.createVideoJSON, null)
                .execute().returnResponse();
	 HttpEntity entity=response.getEntity();
     System.out.println("String reponse --->"+ response.getStatusLine().getStatusCode());

     String theString = IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8); 
     System.out.println("String reponse --->"+ theString);
     String videoId=JsonPath.parse(theString).read("$._id").toString();
     System.out.println("String reponse videoId--->"+ videoId);

     result.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()).trim());
     result.put("HTTPResponse",IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8));
     result.put("videoId",JsonPath.parse(theString).read("$._id").toString());

	return result;

	}
/**
 * @Method Name getVideoInfoAPI
 * @Description : to  get of all VideoInfoAPI     
 * @return HashMap  holding HttpCode and ResponseContent as String formats
 * @throws ClientProtocolException
 * @throws IOException
 */ 
	public HashMap<String,String> getVideoInfoAPI( )  {
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
 
	/**
	 * @Method Name getVideoAPI
	 * @Description : Returns data about a single video    
	 * @return HashMap  holding HttpCode and ResponseContent as String formats
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	public HashMap<String,String> getVideoAPI( )  {
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
	
	public HashMap<String,String> patchUpdatedVideoAPI( ){
		
		HashMap<String,String> result=new HashMap<String,String>();

		try {
				 
			HttpResponse response=Request.Patch(APIURL)
			.execute().returnResponse();
			 HttpEntity entity=response.getEntity();
		     System.out.println("String reponse --->"+ response.getStatusLine().getStatusCode()  );
	 
		     
		     result.put("HTTPCODE",  String.valueOf(response.getStatusLine().getStatusCode()));
		   
	 
		} catch (Exception e) {
			System.out.println("Exception e");

		}
		return result;
	}
public HashMap<String,String> deleteVideoAPI( ){
		
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

@SuppressWarnings("deprecation")
public void verifyHttpCode ( String actualresponsecode,  String expresponsecode){
	
	Assert.assertEquals(actualresponsecode, expresponsecode);
	System.out.println("Assertion validated...");
 }
 
	public static void main(String[] args) throws ClientProtocolException, IOException {

 
	}

}
