import { isRef, reactive, ref } from 'vue';

import { type NForm } from 'naive-ui';

import { cloneDeep } from 'lodash-es';

export function useFormData<T extends object, F = typeof NForm | null>(
  data: T
) {
  const formData = isRef(data) ? data : reactive(data);
  const formDataRef = isRef(data) ? data : ref(cloneDeep(data));
  const formRef = ref<F | null>(null);
  return {
    formData,
    formDataRef,
    formRef,
  };
}

export function useNaiveForm<T extends object>(data: T) {
  const { formData, formDataRef, formRef } = useFormData(data);
  return {
    formData,
    formDataRef,
    formRef,
  };
}
