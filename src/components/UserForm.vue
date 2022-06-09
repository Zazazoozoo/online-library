<template>
    <div class="user-form">
        <div class="block1">
            <div class="form-fields">
                <h1>Информация о себе:</h1>
            </div>
            <div 
            class="list-default"
                v-for="(fieldValue, fieldLabel, index) in formFields"
                :key="index" 
                >
                <label :for="fieldLabel"> {{fieldLabel}}:</label>
                <input 
                    class="form-control"
                    :id="fieldLabel"
                    v-model="formFields[fieldLabel]"
                    >
            </div>
            <button type="submit" class="button">Сохранить</button>
            <div class="form-group">
                <label for="additionalField">Дополнительное поле:</label>
                <input
                    class="form-control"
                    id="additionalField"
                    v-model="additionalField"
                >
                </div>
                <button
                type="button"
                class="btn btn-success"
                @click="addNewField"
                >
                Добавить
                </button>
            </div>
        </div>
        <div class="block2">
            <h1>Предпросмотр:</h1>
                <p class="preview-fields"
                    v-for="(fieldValue, fieldLabel, index) in formFields"
                    :key="index"
                    >
                    {{`${fieldLabel}: ${fieldValue}`}}
                </p> 
        </div>  
</template>

<script>

    export default {
        name: 'UserForm',
        data() {
            return {
                formFields: {
                    firstName: '',
                    secondName: '',
                    lastName: ''
                },
                additionalField: ''
            }
        },
        methods: {
            addNewField () {
                this.formFields[this.additionalField] = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
input {
    width: 400px;
}
.form-fields {
  margin-right: 50px;
  margin-bottom: 30px;
}
.block1 {
float: left;
display: block;
margin: 2px;
}
.block2 {
float: right;
display: block;
margin: 2px;
}
.button {
margin-top: 15px;
background-color: rgb(26, 99, 255);
color: white;
border: 5px solid rgb(26, 99, 255);
border-radius: 5px;
}
.preview-fields {
    margin-top: 30px;
}
.form-group {
    margin-top: 30px;
}
</style>