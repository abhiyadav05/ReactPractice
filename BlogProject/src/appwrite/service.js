import { use } from "react";
import conf from "../conf/conf";
import { Client, ID, Databases,Storage, Query } from "appwrite";

export class Services{
            client = new Client();
            database;
            buket;

            constructor(){
                this.client
                .setEndpoint(conf.appWriteUrl)
                .setProject(conf.projectId);

                this.database = new Databases(this.client);
                this.bucket = new Storage(this.client);

            }

            async createPost({title,slug,content,featureImg,
                status,userId}){
                    try {
                        return await this.database.createDocument(
                            conf.databaseId,
                            conf.collectionId,
                            slug,
                            {
                               title,
                               content,
                               featureImg,
                               status,
                               userId, 
                            }
                        )
                    } catch (error) {
                        console.log(error);
                    }
                }
            
            async updatePost(slug,{title,content,featureImg
                ,status
            }){
                try {
                    return await this.database.updateDocument(
                        conf.databaseId,
                        conf.collectionId,
                        slug,
                        {
                            title,
                            content,
                            featureImg,
                            status,
                        }
                    )
                } catch (error) {
                    console.log(error);
                }
            }

            async deletePost(slug){
                    try {
                        await this.database.deleteDocument(
                            conf.databaseId,
                            conf.collectionId,
                            slug
                        )
                        return true;
                    } catch (error) {
                        console.log(error);
                        return false;
                    }

            }
        async getPost(slug){
            try {
                this.database.getDocument(
                    conf.databaseId,
                    conf.collectionId,
                    slug,
                )
            } catch (error) {
                console.log(error);
            }
        }

        async getPost(queries=[Query.equal("status","active")]){
            try {
                return await this.database.listDocuments(
                    conf.databaseId,
                    conf.collectionId,
                    queries,
                )
            } catch (error) {
                console.log(error);
                return false;
            }
        }

        async uploadFile(file){
            try {
                return await this.buket.createFile(
                    conf.bukketId,
                    ID.unique(),
                    file
                )
            } catch (error) {
                console.log(error);
                return false;
            }
        }

        async deleteFile(fileId){
            try {
                await this.buket.deleteFile(
                    conf.bukketId,
                    fileId,
                )
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }

        async getFilePreview(fileId){
            return await this.buket.get.getFilePreview(
                conf.bukketId,
                fileId,
            )
        }
}


const service=new Services();

export default service;
