package com.qa_technical_test.constants;

public class Endpoints {

	public   final static String  BASEURL="http://turing.niallbunting.com:3002";
	
	//Song
	public   final static String  getListOfVideos="/api/video";
	public   final static String  getSingleVideos="/api/video/";
	public   final static String  postCreateVideo="/api/video/";
	public   final static String  patchUpdateVideo="/api/video/";
	public   final static String  deleteVideo="/api/video/";

	//Playlist

	public   final static String  getListOfplaylists="/api/video";
	public   final static String  getSinglePlaylist="/api/playlist/";
	public   final static String  postCreatePlaylist="/api/playlist";
	public   final static String  patchUpdateplaylist="/api/playlist/";
	public   final static String  deletePlaylist="/api/playlist/";

 
    public final static String httpcode200="200";
	
}
