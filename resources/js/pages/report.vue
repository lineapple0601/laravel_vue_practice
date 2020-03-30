<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">{{ greeting }}</div>
                    <div class="card-body">
                        Report Component
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
                greeting: 'hello'
            }
        }
    }
</script>
