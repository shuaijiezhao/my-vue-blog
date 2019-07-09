import blog from '@/api/blog'
import vue from 'vue'

export default {
  data () {
    return {
      title: '',
      content: '',
      description: '',
      atIndex: false
    }
  },
  methods: {
    onCreate() {
      blog.createBlog({title: this.title, content:this.content, description: this.description, atIndex: this.atIndex})
          .then(res => {
            this.$message.success(res.msg)
            this.$router.push({path: `/detail/${res.data.id}`})
          })
    }
  }
}