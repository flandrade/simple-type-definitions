import { expectType, expectError } from "tsd";
import * as myApi from '.';

// getUser
expectType<myApi.User>(myApi.getUser(1));
expectError<myApi.User[]>(myApi.getUser(2));

// getUsers
expectType<myApi.User[]>(myApi.getUsers());
expectError<myApi.User>(myApi.getUsers());
