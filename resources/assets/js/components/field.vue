<template>
	<div class="field">
		<p class="label">{{label}}</p>
		<div class="control">
			<input :type="inputType" :name="inputName" :value="inputValue"
				:class="inputClass">
		</div>
	</div>
</template>

<script>
module.exports = {
	props:[
		'label',
		'hasError',
		'inputValue',
		'inputType',
		'inputName',
	],
	computed:{
		inputClass(){
			var styleClass = {
				'input':true ,
				'is-danger':this.hasError
			}
			if(this.inputType == 'checkbox'){
				delete styleClass.input;
				styleClass.checkbox = true;
			}
			return styleClass;

		}
	}
}
</script>