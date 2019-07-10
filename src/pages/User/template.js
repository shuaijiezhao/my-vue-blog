import blog from "@/api/blog";

export default {
  data () {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0
    }
  },
  created() {
    this.userId = this.$route.params.userId
    console.log(this.userId)
    this.page = this.$route.query.page || 1
    blog.getBlogsByUserId(this.userId, {page: this.page}).then(res => {
      this.blogs = res.data
      this.total = res.total
      this.page = res.total
      if (res.data.length > 0) {
        this.user = res.data[0].user
      }
    })
  },
  computed: {
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.userId, {page: newPage}).then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: `/user/${this.userId}`, query: { page: newPage}})
      })
    },
    splitDate(datsStr) {
      let objDate = typeof datsStr === 'object' ? datsStr : new Date(datsStr)
      return {
        day: objDate.getDate(),
        month: objDate.getMonth() + 1,
        year: objDate.getFullYear()
      }
    }
  }
}