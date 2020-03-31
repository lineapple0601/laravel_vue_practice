<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">{{ responseArr.title }}</div>
                    <div class="card-body">
                        {{ responseArr.contents }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                responseArr: {}
            }
        },
        mounted() {
            const self = this;
            const url = '/pages/report';
            axios.post(url).then(function(response){
                self.responseArr = response.data;
            });
        }
    }
</script>
