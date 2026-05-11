export class PostsService {
  static URL = 'https://jsonplaceholder.typicode.com/posts'
  
  static async getPosts(page: number = 1, limit: number = 15) {
    const resp = await fetch(`${PostsService.URL}?_page=${page}&_limit=${limit}`)
    const body = await resp.json()
    return body
  }
  
  static async getPost(postId: string) {
    const resp = await fetch(`${PostsService.URL}/${postId}`)
    const body = await resp.json()
    return body
  }
}