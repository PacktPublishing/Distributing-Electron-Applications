#include "functions.h"

using v8::FunctionTemplate;

NAN_MODULE_INIT(InitAll) {
  Nan::Set(target, Nan::New("getString").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(GetString)).ToLocalChecked());
}

NODE_MODULE(NativeExtension, InitAll)
